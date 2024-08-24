const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
   fullName: {
      type: String,
      required: true
   },
   origin: {
      type: String,
      required: true
   },
   favoriteNumber: {
      type: Number,
      required: true
   }
}, {timestamps: true})

module.exports = mongoose.model('Player', playerSchema)