// routes/candidateRoute.js
const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');

// Route to create a new candidate
router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);

module.exports = router;
