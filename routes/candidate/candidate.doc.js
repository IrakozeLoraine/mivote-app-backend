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

const getCandidatesByPoll = {
  tags: ['candidates'],
  description: 'List of all candidates in a certain poll',
  parameters: [
    {
      in: 'path',
      name: 'poll_id',
      required: true,
      schema: {
        type: 'string',
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
                items: '#/components/schemas/Candidate',
              },
            },
            example: {
              message: 'Returned message',
              data: [candidate],
            },
          },
        },
      },
    },
  },
};

const createCandidate = {
  tags: ['candidates'],
  description: 'create a new candidate',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            user_id: {
              type: 'string',
              description: 'the user id of this candidate',
              example: 'sample user id',
            },
            poll_id: {
              type: 'string',
              description: 'the poll id this candidate is in',
              example: 'sample poll id',
            },
            bio: {
              type: 'string',
              description: 'the full biography of this candidate',
              example: 'sample biography of a candidate',
            },
            goals: {
              type: 'string',
              description: 'the goal, mission of this candidate',
              example: 'achieving greatness with the people',
            },
            party: {
              type: 'string',
              description: 'the party from which this candidate comes from',
              example: 'the party of this candidate',
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
              data: '#/components/schemas/Candidate',
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

const candidateRouteDoc = {
  '/api/v1/candidates': {
    post: createCandidate,
  },
  '/api/v1/candidates/{poll_id}': {
    get: getCandidatesByPoll,
  },
};

module.exports = candidateRouteDoc;
