const express = require('express');
const api = express.Router();

const publicacionController = require('../controllers/publicacionController');

api.post('/publicacion', publicacionController.createPublicacion);
api.get('/publicaciones', publicacionController.getPublicaciones);
api.put('/publicacion/update/:id', publicacionController.updatePublicacion);
api.delete('/publicacion/delete/:id', publicacionController.deletePublicacion);
api.get('/publicacion/search/:id', publicacionController.getSpecificPublicacion);

module.exports = api;