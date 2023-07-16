const express = require('express');
const router = express.Router();
const student = require('../controllers').student;

router.get('/', student.getAllStudents);
// router.post('/', student.addStudent);
router.get('/:id', student.getStudentDetails);
router.get('/studentFullDetails/:id', student.getStudentAllDetails);
router.get('/classWiseStudents/:id', student.classWiseStudents);
router.get('/classWiseStudentsForAttendance/:id', student.classWiseStudentsForAttendance);
router.get('/classWiseStudentsForKit/:id', student.classWiseStudentsForKit);
router.get('/classWiseStudentsForMaterial/:id', student.classWiseStudentsForMaterial);

module.exports = router;