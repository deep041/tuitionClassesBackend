const express = require('express');
const router = express.Router();
const attendance = require('../controllers').attendance;

router.post('/', attendance.addAttendance);
router.get('/:id', attendance.getStudentAttendanceDetails);

module.exports = router;