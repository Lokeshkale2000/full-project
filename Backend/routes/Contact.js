const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Contact model (to store data in MongoDB)

// POST route for handling contact form submissions
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save to the database
    await newContact.save();

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
});

module.exports = router;
