const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bracketSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Need a name!']
  },
  numberOfEntrants: {
    type: Number,
    enum: [8, 16, 32, 64],
    required: true
  },
  entrants: {
    type: [],
    required: true
  },
  game: {
    type: String,
    required: [true, 'Need to choose a game!']
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: [true, 'Need a location!']
  },

  // matches or rounds with match objects inside?
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