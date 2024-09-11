// Import required modules
const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');  // Adjust the path as needed
const mongoose = require('mongoose');

// Add or update an item in the cart
router.post('/cart', async (req, res) => {
  const { userId, productId, title, description, img, price, quantity } = req.body;

  try {
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Find or create a cart for the user
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if item already exists in the cart
    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, title, description, img, price, quantity });
    }

    await cart.save();
    res.status(200).json({ message: 'Item added to cart!' });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get cart items for a user
router.get('/cart/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    // Find the cart for the given user ID
    const cart = await Cart.findOne({ userId });

    // Check if the cart exists
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    // Send the cart items
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all carts (find all)
router.get('/carts', async (req, res) => {
  try {
    // Retrieve all carts
    const carts = await Cart.find({});
    res.status(200).json(carts);
  } catch (error) {
    console.error('Error fetching all carts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
