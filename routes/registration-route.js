const express = require("express");

const router = express.Router();

const { validateRegistration } = require("../middlewares/validate");


const { registrationUser } = require("../controllers/registration-controller");

router.post('/registration', validateRegistration, registrationUser);

module.exports = router;