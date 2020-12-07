const express = require('express');
const router = express.Router();

const { authenticate, getAllUsers } = require('../controllers')

router.post('/authenticate', authenticate);
router.get('/', getAllUsers);

module.exports = router;