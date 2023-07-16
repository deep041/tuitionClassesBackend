const express = require('express');
const router = express.Router();
const attendance = require('../controllers').attendance;

router.post('/', attendance.addAttendance);
router.get('/:id', attendance.getStudentAttendanceDetails);
router.patch('/', attendance.updateAttendance);

module.exports = router;