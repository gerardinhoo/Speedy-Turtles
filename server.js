const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const playerRoutes = require('./routes/players');

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Routes
app.use('/api/players', playerRoutes);

// Connect to mongo DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
   // listening for requests
   const PORT  = process.env.PORT || 4000;
   app.listen(PORT, () => {
   console.log(`Connected to DB & Server running on ${PORT}`);
})
  })
  .catch((error) => {
   console.log(error);
  })

