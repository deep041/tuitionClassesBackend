const express = require('express');
const router = express.Router();
const result = require('../controllers').result;

router.post('/', result.addResult);
router.get('/:id', result.getStudentResultDetails);

module.exports = router;