const express = require('express');
const router = express.Router();
const student = require('../controllers').student;

router.get('/', student.getAllStudents);
// router.post('/', student.addStudent);
router.get('/:id', student.getStudentDetails);
router.get('/classWiseStudents/:id', student.classWiseStudents);

module.exports = router;