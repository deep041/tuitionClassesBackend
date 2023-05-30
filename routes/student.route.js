const express = require('express');
const router = express.Router();
const student = require('../controllers').student;

router.get('/', student.getAllStudents);
router.post('/', student.addStudent);

module.exports = router;