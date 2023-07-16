const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId },
    name: { type: String },
    details: { type: Array }
})