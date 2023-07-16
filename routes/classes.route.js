const express = require('express');
const router = express.Router();
const classes = require('../controllers').classes;

// router.post('/', fees.addFees);
router.get('/:id', classes.getClassesDetails);

module.exports = router;