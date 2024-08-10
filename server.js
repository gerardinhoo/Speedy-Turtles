const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.get('/', (req, res) => {
  res.json({message: 'Welcome To Speedy Turtles!'});
})

const PORT  = process.env.PORT || 4000;

app.listen(PORT, () => {
   console.log(`Server running on ${PORT}`);
})