const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      email,
      password, // Store password as plain text
    });

    await user.save();
    return res.status(201).json({ success: true, msg: 'User created successfully' });

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
