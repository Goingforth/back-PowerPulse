const { check } = require('express-validator');


const validateLogin = [check("password", "Password lenght should be min 6 ").isLength(min = 6),
check("email", "Email is not email format").matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
];

const validateRegistration = [check("name", "Name is not empty").notEmpty(),
    validateLogin
];


module.exports = {
    validateRegistration,
    validateLogin
}