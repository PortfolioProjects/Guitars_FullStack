const mongoose = require('mongoose');

const woodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: 1,
    maxLength: 100
  }
});

const Wood = mongoose.model('Wood', woodSchema);

module.exports = {
  Wood
}