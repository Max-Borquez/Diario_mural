const express = require('express');
const api = express.Router();

const likeController = require('../controllers/likeController');

api.post('/like', likeController.createlike);
api.get('/likes', likeController.getLikes);

module.exports = api;