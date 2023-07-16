const mongoose = require('mongoose');

const studentSchema = require('./student.modal');
const frontEndSchema = require('./front-end.modals');
const feesSchema = require('./fees.modal');
const attendanceSchema = require('./attendance.modal');
const resultsSchema = require('./result.modal');
const classesSchema = require('./classes.modal');
const kitSchema = require('./kit.modal');
const materialSchema = require('./material.modal');

const student = mongoose.model('students', studentSchema);
const frontEnd = mongoose.model('frontends', frontEndSchema);
const fees = mongoose.model('fees', feesSchema);
const attendance = mongoose.model('attendances', attendanceSchema);
const results = mongoose.model('results', resultsSchema);
const classes = mongoose.model('classes', classesSchema);
const kits = mongoose.model('kits', kitSchema);
const material = mongoose.model('materials', materialSchema);

module.exports = { student, frontEnd, fees, attendance, results, classes, kits, material };
