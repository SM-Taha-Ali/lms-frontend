const mongoose = require('mongoose');
const { Schema } = mongoose;

const BloodgroupSchema = new Schema({
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

const Bloodgroup = mongoose.model('bloodgroup', BloodgroupSchema)

module.exports = Bloodgroup;
