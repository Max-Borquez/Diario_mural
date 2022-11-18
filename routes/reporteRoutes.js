const express = require('express');
const api = express.Router();

const ReporteController = require('../controllers/reporteController');

api.post('/reporte', ReporteController.createReporte);
api.get('/reportes', ReporteController.getReporte);

module.exports = api;