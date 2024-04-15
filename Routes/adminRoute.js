// routes/adminRoute.js
const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminCnontroller');

// Define routes for creating an admin and fetching all admins
router.post('/admins', adminController.createAdmin);
router.get('/admins', adminController.getAllAdmins);

module.exports = router;
