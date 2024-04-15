// completeHomeworkRoutes.js

const express = require('express');
const router = express.Router();
const homeworkController = require('../Controllers/homeworkController');

// Route for marking homework as complete
router.post('/homeworks', homeworkController.createHomework);

// Route for getting all completed homework
router.get('/homeworks', homeworkController.getAllHomeworks);

module.exports = router;
