const express = require('express');
const { check } = require('express-validator');
const { createUser } = require('../controllers/authController');
const router = express.Router();

router.post(
  '/createUser',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  createUser
);

module.exports = router;
