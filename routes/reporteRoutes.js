const express = require('express');
const api = express.Router();

const reporteController = require('../controllers/reporteController');

api.post('/reporte', reporteController.createReporte);
api.get('/reportes', reporteController.getReporte);
api.delete('/reporte/delete/:id', reporteController.deleteReporte);

module.exports = api;