const express = require('express');
const Bid = require('../models/bids');
const router = express.Router();

// Get bids for a specific item
router.get('/bids/:itemId', async (req, res) => {
  try {
    const bids = await Bid.find({ itemId: req.params.itemId });
    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
