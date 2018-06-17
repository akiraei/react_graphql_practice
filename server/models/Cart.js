const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    consumerId: String
});

module.exports = mongoose.model('Cart', CartSchema);
