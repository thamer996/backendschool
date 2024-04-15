

const express = require('express');
const router = express.Router();
const RoleController = require('../Controllers/RoleController');


router.post('/add-role', RoleController.addRole);



module.exports = router;