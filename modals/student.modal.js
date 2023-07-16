const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    surname: { type: String },
    firstName: { type: String },
    secondName: { type: String },
    dob: { type: Date },
    board: { type: String },
    class: { type: String },
    gender: { type: String },
    address: { type: String },
    fatherNumber: { type: Number },
    motherNumber: { type: Number },
    otherNumber: { type: Number },
    whatsAppNumber: { type: Number },
    email: { type: String },
    parentsOccupation: { type: String },
    parentsOccupationAddress: { type: String },
    presentSchool: { type: String },
    previousResult: { type: String },
    password: { type: String },
    token: { type: String },
    batch: { type: String }
})