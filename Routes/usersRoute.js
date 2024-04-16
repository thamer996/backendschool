
const { authorizeAdmin } = require('../Middlewares/AdminMiddleware');
const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const authenticateUser= require('../Middlewares/AuthenticationMiddleware');



router.post('/login', UserController.loginUser);
router.post('/logout',authenticateUser,UserController.logoutUser);
router.post('/add-user', authenticateUser, authorizeAdmin,UserController.addUser);




module.exports = router;