const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/loginUser', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Email not found' });
    }

    // Check if password matches (plain text comparison)
    if (password !== user.password) {
      return res.status(400).json({ success: false, message: 'Password mismatch' });
    }

    // Successful login
    res.json({ success: true, message: 'Login successful' });

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
