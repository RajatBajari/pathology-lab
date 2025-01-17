
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    status: {
        default: "Pending",
        type: String
    },
    age: {
        required: true,
        type: String
    },
    address: {
        required: true,
         type: String
    },
    mobileNo: {
        type: String,
        required: true
    },
    examinedBy: {
        required: true,
        type: String
    },
    examinedDate: {
        required: true,
        type: String
    },
    test: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    reportDate: {
        required: true,
        type: String
    },

    result: [{
        name: {
            required: true,
            type: String
        },
        range: {

            required: true,
            type: String
        },
        unit: {
            required: true,
            type: String

        },
        result: {
            required: true,
            type: String
        }
    }
    ]
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
}
);
const repo = mongoose.model('patients', Schema);
module.exports = repo;