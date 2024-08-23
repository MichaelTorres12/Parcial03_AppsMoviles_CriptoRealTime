const express = require('express');
const router = express.Router();
const apiService = require('../services/apiService');

router.get('/crypto-stats', async (req, res) => {
  try {
    const data = await apiService.getCryptoStats();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch crypto stats' });
  }
});

module.exports = router;
