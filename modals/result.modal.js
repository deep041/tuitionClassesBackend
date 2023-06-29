const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    studentId: { type: mongoose.Schema.ObjectId },
    marks: { type: Number },
    totalMarks: { type: Number },
    subject: { type: String },
    date: { type: Date }
})