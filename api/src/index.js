if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv').config()
}

const express = require('express')
// const dotenv = require('dotenv').config()
const DBconnect = require('./backend/db.js')
const passport = require('passport')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')
const User = require('./backend/models/userSchema.js')
const methodOverride = require('method-override')
const initializePassport = require('./passport-config')

initializePassport(
    passport, 
    async (email) => await User.findOne({email: email}),
    async (id) => await User.findOne({id: id})
)

const PORT = process.env.PORT || 5001
const app = express()
DBconnect()


app.use(cors({
    origin: process.env.ORIGIN,
    methods:"GET,POST,PUT,DELETE",
    credentials: true
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
// <form action="/logout?_method=DELETE" method="POST">
//      <button type="submit">Log out</button>
// </form>
app.use(methodOverride('_method'))


// app.use('/api/brews', checkAuthenticated, require('./backend/routes/brewRoutes.js'))
// app.use('/api/users', checkAuthenticated, require('./backend/routes/userRoutes.js'))
app.use('/api/brews', require('./backend/routes/brewRoutes.js'))
app.use('/api/users', require('./backend/routes/userRoutes.js'))

app.get('/api/auth/login', checkNotAuthenticated, (req, res) => {
    res.send('Not logged in')
})

app.get('/api/auth', checkAuthenticated, (req, res) => {
    res.send('Logged in')
})

app.post('/api/auth/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/api/auth',
    failureRedirect: '/api/auth/login',
    failureFlash: true
}))

app.post('/api/auth/register', checkNotAuthenticated, async (req, res) => {
    
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) {
        return res.status(400).send('email already exists.')
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        firstname: req.body.firstname,
        surname: req.body.surname,
        email: req.body.email,
        password: hashPassword
    })

    try {
        const savedUser = await user.save();
        res.send(savedUser)
    } catch (e) {
        res.status(400).send(err)
    }
})

app.post('/api/auth/logout', (req, res, next) => {
    req.logOut((error) => {
        if (error) {
            return next(error);
        }
        res.redirect('/api/auth/login')
    })
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/api/auth/login')
}

function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return res.redirect('/api/auth')
    }
    next()
}

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})