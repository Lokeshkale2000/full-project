const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',  // Change this to match your frontend's URL
  credentials: true
}));
app.use(bodyParser.json());

// Import routes
const createUserRoutes = require('./routes/createUser');
const loginUserRoutes = require('./routes/loginUser');
const contactRoutes = require('./routes/Contact'); 
const cartRoutes = require('./routes/Cart');  // Import the Cart routes

// Use routes
app.use('/api', createUserRoutes);
app.use('/api', loginUserRoutes);
app.use('/api', contactRoutes); 
app.use('/api', cartRoutes);  // Use the Cart routes

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
