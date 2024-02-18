const express = require("express");

const router = express.Router();

const { validateLogin } = require("../middlewares/validate");

const { loginUser } = require("../controllers/login-controller");

router.post('/login', validateLogin, loginUser);


module.exports = router;