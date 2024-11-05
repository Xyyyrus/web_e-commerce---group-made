const express = require('express');
const TradeItem = require('../models/tradeItems');
const router = express.Router();

// Get all trade items
router.get('/trade-items', async (req, res) => {
  try {
    const items = await TradeItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
