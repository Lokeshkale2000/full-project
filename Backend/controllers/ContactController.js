const { validationResult } = require('express-validator');
const Contact = require('../models/Contact'); // Import the Contact model

// Controller to handle contact form submission
const contactController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, name, message } = req.body;

  try {
    // Save the contact form data to MongoDB
    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save(); 
    // This saves the data to MongoDB

    // Respond with success message
    res.status(200).json({ success: true, msg: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    res.status(500).json({ success: false, msg: 'Server error' });
  }
};

module.exports = { contactController };