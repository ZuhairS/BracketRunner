const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bracketSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  // numberOfEntrants: {
  //   type: Number,
  //   enum: [8],
  //   default: 8,
  //   required: true
  // },
  entrants: {
    type: {},
    required: true
  },
  game: {
    type: String,
    required: true
  },
  startTime: {
    type: Date
    // required: true
  },
  endTime: {
    type: Date
    // required: true
  },
  location: {
    type: String
  },
  live: Boolean,
  // matches or rounds with match objects inside?
  matches: [
    {
      pairing: {
        player1: {},
        player2: {}
      },
      live: Boolean,
      result: {
        winner: String,
        loser: String,
        player1Score: Number,
        player2Score: Number,
        status: String
      }
    }
  ]
});

module.exports = mongoose.model('bracket', bracketSchema);
