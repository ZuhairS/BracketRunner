const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bracketSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tournamentOrganizerId: String,
  // {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user',
  //   required: true
  // },
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
    type: Date,
    default: new Date()
    // required: true
  },
  endTime: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate() + 1))
    // required: true
  },
  location: {
    type: String
  },
  live: { type: Boolean, default: true },
  streamUrl: {
    type: String,
    default: 'www.google.com'
  },
  matches: [
    {
      pairing: {
        player1: {},
        player2: {}
      },
      live: { type: Boolean, default: false },
      result: {
        winner: { type: String, default: 'pending' },
        loser: { type: String, default: 'pending' },
        player1Score: { type: Number, default: 0 },
        player2Score: { type: Number, default: 0 },
        status: { type: String, default: 'pending' }
      }
    }
  ]
});

module.exports = mongoose.model('bracket', bracketSchema);
