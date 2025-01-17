
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: {
        required: true, type: String
    },
    description: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    fasting: {
        required: true,
        type: String
    },
    imgLink: {
        type: String,
        default: "http://clipart-library.com/images/8TxrBGznc.jpg"
    },
    normalRange: {
        required: true,
        type: String
    },
    abnormalRange: {
        required: true,
        type: String
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
});
const repo = mongoose.model('tests', Schema);
module.exports = repo;