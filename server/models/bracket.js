const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bracketSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tournamentOrganizer: {
    type: Schema.Types.ObjectId,
    ref: 'user'
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
  streamUrl: String,
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
