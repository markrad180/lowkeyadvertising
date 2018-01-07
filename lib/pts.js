const mongoose = require('mongoose');

const userProfile = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  firstname: String,
  lastname: String
});

let point = mongoose.model('points', userProfile);

module.exports = point;
