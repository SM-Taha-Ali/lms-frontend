const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubBindSchema = new Schema({
    subject: {
        type: String,
        unique: false,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    subgroup: {
        type: String,
        required: true
    }
});

const SubBind = mongoose.model('subBind', SubBindSchema)

module.exports = SubBind;
