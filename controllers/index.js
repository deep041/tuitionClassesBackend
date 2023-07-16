const student = require('./student.controller');
const frontEnd = require('./front-end.controller');
const loginRegister = require('./login_register.controller');
const fees = require('./fees.controller');
const attendance = require('./attendance.controller');
const result = require('./results.controller');
const classes = require('./classes.controller');
const kit = require('./kit.controller');
const material = require('./material.controller');

module.exports = { student, frontEnd, loginRegister, fees, attendance, result, classes, kit, material };