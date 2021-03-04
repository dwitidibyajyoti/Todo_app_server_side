const mongoose = require('mongoose');

const todoScama = new mongoose.Schema({
  todo: {
    type: String,
    require: true,
    min: 4,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('todo', todoScama);
