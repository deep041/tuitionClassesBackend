const express = require('express');
const router = express.Router();
const fees = require('../controllers').fees;

router.post('/', fees.addFees);
router.get('/', fees.getStudentFeeDetails);

module.exports = router;