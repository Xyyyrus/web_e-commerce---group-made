const express = require('express');
const {
  getAllUsers,
  performUserAction,
  getUserDetails,
  deleteUser,
  createUser,
} = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .put(performUserAction)
  .delete(deleteUser)
  .post(createUser);

router.route('/:id').get(getUserDetails);

module.exports = router;
