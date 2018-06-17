const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    quantity: Number,
    merchandiseId: String,
    cartId: String,
    deliveryId: String
});

module.exports = mongoose.model('Order', OrderSchema);
