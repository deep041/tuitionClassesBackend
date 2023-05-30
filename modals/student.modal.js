const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    surName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    token: { type: String }
})