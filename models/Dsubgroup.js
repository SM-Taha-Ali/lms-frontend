const mongoose = require('mongoose');
const { Schema } = mongoose;

const DsubgroupSchema = new Schema({
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
    }
});

const Dsubgroup = mongoose.model('dsubgroup', DsubgroupSchema)

module.exports = Dsubgroup;
