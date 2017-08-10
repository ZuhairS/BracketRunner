const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bracketSchema = new Schema({
  matches: [
    {
      player1: {
        type: String
      },
      player2: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('bracket', bracketSchema);
