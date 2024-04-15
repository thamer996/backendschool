
const { authorizeAdmin } = require('../Middlewares/AdminMiddleware');
const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');


router.post('/add-user', UserController.addUser);
router.post('/login', UserController.loginUser);
router.post('/logout', UserController.logoutUser);




module.exports = router;