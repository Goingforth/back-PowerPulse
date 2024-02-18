const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
require('dotenv').config();
const secret = process.env.SECRET;

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(400).json({ message: "Error validation", errors }) }
    const user = await User.findOne({ email });

    if (!user || !user.validPassword(password)) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: 'Incorrect login or password',
            data: 'Bad request',
        });
    }

    const payload = {
        id: user.id,
        username: user.username,
    };

    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    res.json({
        status: 'success',
        code: 200,
        data: {
            token,
        },
    });


};

module.exports = {
    loginUser
}