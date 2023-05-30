const router = require('express').Router();

const student = require('./student.route');
const frontEnd = require('./front-end.route');
const loginRegister = require('./login_register.route');

router.use('/student', student);
router.use('/frontend', frontEnd);
router.use('/user', loginRegister);

module.exports = router;