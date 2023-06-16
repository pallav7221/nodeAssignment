const express = require('express');
const { addUser, loginUser } = require('../handlers/user');

const userRouter = express.Router();

userRouter.post('/add-user', addUser);
userRouter.post('/login-user', loginUser);

module.exports = {userRouter};