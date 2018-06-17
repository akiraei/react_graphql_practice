const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    name: String,
    phone: Number,
    address: String
});

module.exports = mongoose.model('Provider', ProviderSchema);
