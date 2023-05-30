const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: { type: String },
    logo: { type: String },
    color: { type: String },
    modules: { type: Array }
})