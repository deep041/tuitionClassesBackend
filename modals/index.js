const mongoose = require('mongoose');

const studentSchema = require('./student.modal');
const frontEndSchema = require('./front-end.modals');
const feesSchema = require('./fees.modal');
const attendanceSchema = require('./attendance.modal');
const resultsSchema = require('./result.modal');

const student = mongoose.model('students', studentSchema);
const frontEnd = mongoose.model('frontends', frontEndSchema);
const fees = mongoose.model('fees', feesSchema);
const attendance = mongoose.model('attendances', attendanceSchema);
const results = mongoose.model('results', resultsSchema);

module.exports = { student, frontEnd, fees, attendance, results };
