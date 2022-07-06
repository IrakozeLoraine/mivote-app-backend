const candidateSchema = {
  Candidate: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      user: { type: 'object' },
      poll: { type: 'object' },
      votes: { type: 'number' },
      bio: { type: 'string' },
      goals: { type: 'string' },
      party: { type: 'string' },
      created_on: { type: 'string' },
    },
  },
};

module.exports = candidateSchema;
