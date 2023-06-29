const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    studentId: { type: mongoose.Schema.ObjectId },
    status: { type: Boolean },
    date: { type: Date }
});