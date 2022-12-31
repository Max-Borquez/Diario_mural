const express = require('express');
const api = express.Router();

const categoriaController = require('../controllers/categoriaController');

api.post('/categoria', categoriaController.createCategoria);
api.get('/categorias', categoriaController.getCategorias);
api.put('/categoria/update/:id', categoriaController.updateCategoria);
api.delete('/categoria/delete/:id', categoriaController.deleteCategoria);

module.exports = api;