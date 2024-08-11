const express = require('express');
const app = express();
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

const PORT  = process.env.PORT || 4000;

app.listen(PORT, () => {
   console.log(`Server running on ${PORT}`);
})