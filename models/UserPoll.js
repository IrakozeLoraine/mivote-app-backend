const mongoose = require('mongoose');

const UserPollSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  poll_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Poll' },
  status: {
    type: String,
    enum: ['HAS_VOTED', 'HAS_NOT_VOTED'],
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('UserPoll', UserPollSchema);
