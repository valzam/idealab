const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const usersController = require('../controllers/users');

router.post('/users', usersController.registerUser);

// middlewares
//router.use(auth.isAuthenticated);

/* General route for usersentification
*/
router.get('/users', usersController.getUsers);

router.put('/users/', usersController.updateUser);


module.exports = router;
