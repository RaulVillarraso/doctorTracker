const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const Season = mongoose.model('Season', seasonSchema);
module.exports = Season;