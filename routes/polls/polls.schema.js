const pollSchema = {
  Poll: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      name: { type: 'string' },
      author: { type: 'string' },
      candidates: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      location: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['PENDING', 'ONGOING', 'CLOSED', 'CANCELLED'],
      },
      created_on: {
        type: 'string',
      },
    },
  },
};

module.exports = pollSchema;
