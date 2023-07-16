const express = require('express');
const router = express.Router();
const material = require('../controllers').material;

router.post('/', material.addMaterial);
router.get('/:id', material.getStudentMaterialDetails);
router.patch('/', material.updateMaterial);

module.exports = router;