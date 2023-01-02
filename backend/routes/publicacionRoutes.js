const express = require('express');
const api = express.Router();

const publicacionController = require('../controllers/publicacionController');
const checkRUT = require('../middlewares/checkRUT');

api.post('/publicacion', publicacionController.createPublicacion);
api.get('/publicaciones', publicacionController.getPublicaciones);
api.put('/publicacion/update/:id', publicacionController.updatePublicacion);
api.delete('/publicacion/delete/:id', publicacionController.deletePublicacion);
api.get('/publicacion/search/:id', publicacionController.getSpecificPublicacion);
api.post('/login', checkRUT)

module.exports = api;