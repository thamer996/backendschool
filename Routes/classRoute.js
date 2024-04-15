// classRoutes.js

const express = require('express');
const router = express.Router();
const classController = require('../Controllers/classController');

// Route for creating a new class
router.post('/classes', classController.createClass);

// Route for getting all classes
router.get('/classes', classController.getAllClasses);

module.exports = router;
