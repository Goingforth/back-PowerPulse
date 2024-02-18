const express = require("express");

const router = express.Router();
const { check } = require('express-validator');

const { loginUser } = require("../controllers/login-controller");

router.post('/login',
    [check("password", "Password lenght should be min 6 ").isLength(min = 6),
    check("email", "Email is not email format").matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    ],
    loginUser);


module.exports = router;