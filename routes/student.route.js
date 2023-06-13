const express = require('express');
const router = express.Router();
const student = require('../controllers').student;

router.get('/', student.getAllStudents);
router.post('/', student.addStudent);
router.post('/classWiseStudents', student.classWiseStudents);

module.exports = router;