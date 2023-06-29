const router = require('express').Router();

const student = require('./student.route');
const frontEnd = require('./front-end.route');
const loginRegister = require('./login_register.route');
const fees = require('./fees.route');
const attendance = require('./attendance.route');
const result = require('./result.route');

router.use('/student', student);
router.use('/frontend', frontEnd);
router.use('/user', loginRegister);
router.use('/fees', fees);
router.use('/attendance', attendance);
router.use('/result', result);

module.exports = router;