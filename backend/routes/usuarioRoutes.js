const express = require('express');
const api = express.Router();

const usuarioController = require('../controllers/usuarioController');

api.post('/usuario', usuarioController.createUsuario);
api.get('/usuarios', usuarioController.getUsuarios);
api.delete('/usuario/delete/:id', usuarioController.deleteUsuario);

module.exports = api;