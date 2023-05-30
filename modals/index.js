const mongoose = require('mongoose');

const studentSchema = require('./student.modal');
const frontEndSchema = require('./front-end.modals');

const student = mongoose.model('students', studentSchema);
const frontEnd = mongoose.model('frontends', frontEndSchema);

module.exports = { student, frontEnd };
