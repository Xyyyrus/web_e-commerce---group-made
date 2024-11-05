const { login, registerBuyer } = require('../controllers/authControllers');

const express = require('express');

const router = express.Router();

router.route('/login').post(login);

router.route('/register-buyer').post(registerBuyer);

module.exports = router;
