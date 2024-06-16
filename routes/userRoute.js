// var express = require('express')
import express from 'express'
// var user = require('../controllers/userController')
import user from '../controllers/userController'

var api = express.Router()



api.get('/', user.prueba)
api.get('/getusers', user.getUsers)
api.post('/register', user.saveUser)
api.put('/register/:id', user.putUser)
api.delete('/register/:id', user.deleteUser)
api.delete('/register', user.deleteAll)

module.exports = {api}