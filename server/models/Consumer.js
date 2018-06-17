const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConsumerSchema = new Schema({
    name: String,
    phone: Number,
    address: String
});

module.exports = mongoose.model('Consumer', ConsumerSchema);
