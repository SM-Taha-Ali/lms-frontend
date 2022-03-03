const mongoose = require('mongoose');
const { Schema } = mongoose;

const FeedomainSchema = new Schema({
    value: {
        type: String,
        unique: true,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const Feedomain = mongoose.model('feedomain', FeedomainSchema)

module.exports = Feedomain;
