const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
  seasonCount: String,
  episodes: Array,
  watched: Boolean,
});

const Season = mongoose.model('Season', seasonSchema);
module.exports = Season;
