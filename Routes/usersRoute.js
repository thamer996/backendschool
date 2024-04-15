
const { authorizeAdmin } = require('../Middlewares/AdminMiddleware');
const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');


router.post('/add-user',authorizeAdmin, UserController.addUser);
router.post('/login', UserController.loginUser);



module.exports = router;