const express = require('express');
const api = express.Router();

const comentarioController = require('../controllers/comentarioController');

api.post('/comentario', comentarioController.createComentario);
api.get('/comentarios', comentarioController.getComentarios);

module.exports = api;