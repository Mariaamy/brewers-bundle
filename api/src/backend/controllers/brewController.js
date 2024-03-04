const Brew = require('../models/brewSchema')

const getBrews = async (req, res) => {
    try {
        const showBrews = await Brew.find()
        res.json(showBrews)
    } catch (error) {
        res.status(404).json({error: "resource not found", message: "The entered parameter retruned no brews"})
    }
}

const getBrew = async (req, res) => {
    try {
        const showBrew = await Brew.find({_id:req.params.id})
        res.json(showBrew)
    } catch (error) {
        res.status(404)-json({error: "resource not found", message: "The entered parameter returned no brew"})
    }
}

const createBrew = async (req, res) => {
    const newBrew = new Brew({
        name: req.body.name,
        equipments: req.body.equipments,
        ingredients: req.body.ingredients,
        method: req.body.method,
        measurements: req.body.measurements,
        log: req.body.log,
        visibility: req.body.visibility
    })
    newBrew.save()
    .then(data => {
        res.status(201).json(data)
    })
    .catch(error => {
        res.status(400).json({message: error})
    })
}

const updateBrew = async (req, res) => {
    try {
        const updateBrew = await Brew.updateOne(
            {_id: req.params.id},
            {$set:{name:req.body.name, equipments:req.body.equipments, ingredients:req.body.ingredients, method:req.body.method, measurements:req.body.measurements, log:req.body.log, visibility:req.body.visibility}}
        )
        res.json(updateBrew)
    } catch(error) {
        res.status(400).json({error: error, message: "You can only patch name, equipment, ingredients, method, measurements, log and visibility"})
    }
}

const deleteBrew = async (req, res) => {
    try {
        const removeBrew = await Brew.deleteOne({_id:req.params.id})
        res.json(removeBrew)
    } catch(error) {
        res.status(404).json({message: error})
    }
}

module.exports = {getBrews, getBrew, createBrew, updateBrew, deleteBrew}