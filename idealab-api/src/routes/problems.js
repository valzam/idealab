const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const problemsController = require('../controllers/problems');

// middlewares
router.use(auth.isAuthenticated);

/* General routes for problems
*/
router.post('/problems',problemsController.createProblem);

/* Routes for a specific problem
*/
router.get('/problems/:id',problemsController.getProblem);
router.get('/problems',problemsController.getAllProblems);
router.put('/problems/:id',problemsController.updateProblem);
router.delete('/problems/:id',problemsController.deleteProblem);

module.exports = router;
