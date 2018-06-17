const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    consumerId: String
});

module.exports = mongoose.model('Delivery', DeliverySchema);
