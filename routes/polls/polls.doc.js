const poll = {
  _id: 'sample poll id',
  name: 'Presidential Elections',
  author: "author's user id",
  candidates: ['sample candidate id'],
  location: 'New York',
  description: 'elections are open to all eligible to vote',
  status: 'PENDING',
  created_on: '2022-07-01T22:51:54.895Z',
};

const candidate = {
  _id: 'candidate id',
  user_id: 'candidate user id',
  poll_id: "candidate's poll id",
  votes: 3,
  bio: 'candidate biography',
  goals: 'candidate goals and mission',
  party: 'candidate running party',
  created_on: '2022-07-01T22:51:54.895Z',
};

const getPollsByStatus = {
  tags: ['polls'],
  description: 'List of all of the polls according to the provided status',
  parameters: [
    {
      in: 'path',
      name: 'status',
      required: true,
      schema: {
        type: 'string',
        enum: ['PENDING', 'ONGOING', 'CLOSED', 'CANCELLED'],
      },
    },
  ],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Poll',
                },
              },
            },
            example: {
              message: 'Returned message',
              data: [poll],
            },
          },
        },
      },
    },
  },
};

const getAllPolls = {
  tags: ['polls'],
  description: 'List of all of the polls',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'array',
                items: '#/components/schemas/Poll',
              },
            },
            example: {
              message: 'Returned message',
              data: [poll],
            },
          },
        },
      },
    },
  },
};

const createPoll = {
  tags: ['polls'],
  description: 'create a poll',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: "The poll's name",
              example: 'Presidential Elections',
            },
            author: {
              type: 'string',
              description: 'The id of the author of the poll',
              example: "sample author's user id",
            },
            location: {
              type: 'string',
              description: "The poll's location",
              example: 'New York',
            },
            description: {
              type: 'string',
              description: "The poll's brief description",
              example:
                'A poll for presidents. All citizens are allowed to participate',
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created poll',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
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
            },
            example: {
              message: 'Returned message',
              data: poll,
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    },
  },
};

const voteCandidateInPoll = {
  tags: ['polls'],
  description: 'vote a candidate in a poll',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            user_id: {
              type: 'string',
              description: 'The voting user id',
              example: 'user id',
            },
            poll_id: {
              type: 'string',
              description: 'The id of the poll',
              example: 'poll id',
            },
            candidate_id: {
              type: 'string',
              description: 'the id of the candidate',
              example: 'candidate id',
            },
            status: {
              type: 'string',
              enum: ['PENDING', 'ONGOING', 'CLOSED', 'CANCELLED'],
              example: 'PENDING',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created poll',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'object',
                properties: {
                  _id: { type: 'string' },
                  user_id: { type: 'string' },
                  poll_id: { type: 'string' },
                  votes: { type: 'number' },
                  bio: { type: 'string' },
                  goals: { type: 'string' },
                  party: { type: 'string' },
                  created_on: { type: 'string' },
                },
              },
            },
            example: {
              message: 'Returned message',
              data: candidate,
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
          },
        },
      },
    },
  },
};

const pollRouteDoc = {
  '/api/v1/polls': {
    get: getAllPolls,
    post: createPoll,
  },
  '/api/v1/polls/{status}': {
    get: getPollsByStatus,
  },
  '/api/v1/polls/candidate/vote': {
    post: voteCandidateInPoll,
  },
};

module.exports = pollRouteDoc;
