const { fetchBuyerById, updateBuyerById } = require('../controllers/buyerController');

const express = require('express');

const router = express.Router();

router.route('/:id').get(fetchBuyerById);

router.route('/:id').put(updateBuyerById);

module.exports = router;
