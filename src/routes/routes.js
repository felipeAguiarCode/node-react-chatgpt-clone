const express = require('express')
const promptController = require('../controllers/promptController')
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports = routes
