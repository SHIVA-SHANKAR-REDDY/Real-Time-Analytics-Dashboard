// backend/models/DataModel.js
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  metric: String,
  value: Number,
  timestamp: Date
});

module.exports = mongoose.model('Data', DataSchema);
