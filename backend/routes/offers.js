const express = require('express');
const Offer = require('../models/Offer');
const router = express.Router();

// Get all offers
router.get('/offers', async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
