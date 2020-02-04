const express = require('express');
var routes = express.Router();
const controller = require('./controller')

//making calls 

//Create Note

routes.post('/note',controller.createNote);

//Get Note

routes.get('/note',controller.getNote);

//Find Note By ID

routes.get('/note/:_id',controller.getNoteById);

//Update Note

routes.put('/note/:_id',controller.updateNote);

//Delete Note

routes.delete('/note/:_id',controller.deleteNote);

module.exports = routes;