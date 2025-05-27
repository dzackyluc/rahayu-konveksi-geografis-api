const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Gunakan model Order yang sudah ada
const Order = require('../models/Order');

// GET /api/maps-order
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({}, {
      'Nama Pemesan': 1,
      'Alamat': 1,
      'Kota': 1,
      'Latitude': 1,
      'Longitude': 1,
      'Jenis Produk': 1,
      'Jumlah Produk': 1,
      _id: 0  // hilangkan _id jika tidak perlu
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
