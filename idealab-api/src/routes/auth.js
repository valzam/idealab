const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

/* Route for authentification
*/
router.post('/authenticate', authController.authenticateUser);

module.exports = router;
