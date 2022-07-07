const express = require('express');
const auth = require('../middlewares/auth');
const Address = require('../models/address');
const addressRouter = express.Router();

// Get all your products
addressRouter.get("/api/get-address", auth, async (req, res) => {
  try {
     const address = await Address.find({});
    res.json(address);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Add product
addressRouter.post('/api/add-address', auth, async (req, rest) => {
    try {
        const { name, mobile, flat, area, pincode, city } = req.body;
        let address = Address({
            name,
            mobile,
            flat,
            area,
            pincode,
            city,
        });

        address = await address.save();
        rest.json(address);
    } catch (e) {
        rest.status(500).json({ error: e.message });
    }
});

module.exports = addressRouter;