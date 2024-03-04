const User = require('../models/userSchema')

const getUsers = async (req, res) => {
    try {
        const showUsers = await User.find()
        res.json(showUsers)
    } catch (error) {
        res.status(404).json({error: "resource not found", message: "The entered parameter retruned no users"})
    }
}

const getUser = async (req, res) => {
    try {
        const showUser = await User.find({_id:req.params.id})
        res.json(showUser)
    } catch (error) {
        res.status(404)-json({error: "resource not found", message: "The entered parameter returned no user"})
    }
}

const createUser = async (req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        about: req.body.about
    })
    newUser.save()
    .then(data => {
        res.status(201).json(data)
    })
    .catch(error => {
        res.status(400).json({message: error})
    })
}

const updateUser = async (req, res) => {
    try {
        const updateUser = await User.updateOne(
            {_id: req.params.id},
            {$set:{firstname:req.body.firstname, surname:req.body.surname, about:req.body.about}}
        )
        res.json(updateUser)
    } catch(error) {
        res.status(400).json({error: error, message: "You can only patch firstname, surname and about"})
    }
}

const deleteUser = async (req, res) => {
    try {
        const removeUser = await User.deleteOne({_id:req.params.id})
        res.json(removeUser)
    } catch(error) {
        res.status(404).json({message: error})
    }
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser}