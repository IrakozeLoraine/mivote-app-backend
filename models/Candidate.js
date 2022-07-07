const mongoose = require('mongoose');

const CandidateSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  poll: { type: mongoose.Schema.Types.ObjectId, ref: 'Poll' },
  votes: { type: Number, default: 1 },
  bio: {
    type: String,
  },
  goals: {
    type: String,
  },
  party: {
    type: String,
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Candidate', CandidateSchema);
