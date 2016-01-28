const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const solutionsController = require('../controllers/solutions');

// middlewares
router.use(auth.isAuthenticated);

/* General routes for solutions
*/
router.post('/solutions',solutionsController.createSolution);

/* Routes for a specific solution
*/
router.get('/solutions/:id',solutionsController.getSolution);
router.get('/solutions',solutionsController.getAllSolutions);

router.put('/solutions/:id',solutionsController.updateSolution);
router.delete('/solutions/:id',solutionsController.deleteSolution);

module.exports = router;
