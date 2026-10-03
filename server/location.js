const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["High", "Medium", "Low"],
        required: true
    },

    studentCount: {
        type: Number,
        default: 0
    },

    waitingTime: {
        type: Number,
        default: 0
    },

    seatCount: {
        type: Number,
        default: 0
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Location", locationSchema);