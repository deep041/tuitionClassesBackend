const router = require('express').Router();

const student = require('./student.route');
const frontEnd = require('./front-end.route');

router.use('/student', student);
router.use('/frontend', frontEnd);

module.exports = router;