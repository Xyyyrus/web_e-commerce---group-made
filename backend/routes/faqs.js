const express = require('express');
const FAQ = require('../models/faqs');
const router = express.Router();

// Get all FAQs
router.get('/faqs', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
