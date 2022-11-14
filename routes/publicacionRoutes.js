const express = require('express');
const api = express.Router();

const publicacionController = require('../controllers/publicacionController');

api.post('/publicacion', publicacionController.createPublicacion);
api.get('/publicaciones', publicacionController.getPublicaciones);
api.delete('/publicacion/delete/:id', publicacionController.deletePublicacion);

module.exports = api;