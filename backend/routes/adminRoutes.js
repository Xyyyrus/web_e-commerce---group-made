const express = require('express');
const {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require('../controllers/adminControllers');

const router = express.Router();

router
  .route('/')
  .get(getAllAdmins)
  .post(createAdmin)
  .patch(updateAdmin)
  .delete(deleteAdmin);

module.exports = router;
