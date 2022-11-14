const express = require('express');
const api = express.Router();

const ComentarioController = require('../controllers/ComentarioController');

api.post('/comentario', ComentarioController.createComentario);
api.get('/publicaciones', ComentarioController.getComentario);

module.exports = api;