const express = require("express");

const router = express.Router();
const { check } = require('express-validator');


const { registrationUser } = require("../controllers/registration-controller");

router.post('/registration',
    [check("name", "Name is not empty").notEmpty(),
    check("password", "Password lenght should be min 6 ").isLength(min = 6),
    check("email", "Email is not email format").matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    ],
    registrationUser);

module.exports = router;