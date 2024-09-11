const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: String,
      title: String,
      description: String,
      img: String,
      price: Number,
      quantity: Number
    }
  ]
});

module.exports = mongoose.model('Cart', CartSchema);
