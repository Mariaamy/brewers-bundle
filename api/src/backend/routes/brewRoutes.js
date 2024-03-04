const express = require('express')
const router = express.Router()
const {getBrews, getBrew, createBrew, updateBrew, deleteBrew} = require('../controllers/brewController')

router.get('/', getBrews)

router.get('/:id', getBrew)

router.post('/', createBrew)

router.patch('/:id', updateBrew)

router.delete('/:id', deleteBrew)

module.exports = router