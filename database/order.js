const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subTotal: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
});

const Order = mongoose.model('Order', OrderSchema);
module.exports =Order