const express = require('express');
const { addOrder, getOrders } = require('../handlers/order');
const { verifyToken } = require('../handlers/verifyToken');

const orderRouter = express.Router();

orderRouter.post('/add-order',verifyToken, addOrder);
orderRouter.get('/get-order',verifyToken, getOrders);

module.exports = {orderRouter};