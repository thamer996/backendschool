// routes/candidateRoute.js
const express = require('express');
const router = express.Router();
const teacherController = require('../Controllers/teacherController');

// Route to create a new candidate
router.post('/teachers', teacherController.createTeacher);
router.get('/teachers', teacherController.getAllTeachers);

module.exports = router;
