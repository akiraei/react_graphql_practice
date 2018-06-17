const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MerchandiseSchema = new Schema({
    name: String,
    price: Number,
    summary: String,
    quantity: Number,
    providerId: String,
    image: String
});

module.exports = mongoose.model('Merchandise', MerchandiseSchema);
