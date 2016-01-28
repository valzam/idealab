const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const subscriptionsController = require('../controllers/subscriptions');

// middlewares
router.use(auth.isAuthenticated);

/* Routes for subscriptions
*/
router.put('/organizations/:orgaId/subscriptions', subscriptionsController.addNewSubscription);

module.exports = router;
