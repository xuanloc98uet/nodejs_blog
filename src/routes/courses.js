const express = require('express');
const route = express.Router();

const courseController = require('../app/controllers/CourseController');

route.get('/creat', courseController.creat);
route.post('/store', courseController.store);
route.get('/:slug', courseController.show);

module.exports = route;
