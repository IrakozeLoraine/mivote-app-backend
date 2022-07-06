const authRouteDoc = require('../routes/auth/auth.doc');
const userSchema = require('../routes/auth/auth.schema');
const candidateRouteDoc = require('../routes/candidate/candidate.doc');
const candidateSchema = require('../routes/candidate/candidate.schema');
const pollRouteDoc = require('../routes/polls/polls.doc');
const pollSchema = require('../routes/polls/polls.schema');

const swaggerDocumentation = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
  description:
    'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
  license: {
    name: 'Licensed Under MIT',
    url: 'https://spdx.org/licenses/MIT.html',
  },
  servers: [
    {
      url: 'http://localhost:4500',
      description: 'Development server',
    },
  ],
  tags: [
    {
      name: 'polls',
    },
    {
      name: 'candidates',
    },
    {
      name: 'auth',
    },
  ],
  paths: {
    ...pollRouteDoc,
    ...candidateRouteDoc,
    ...authRouteDoc,
  },
  schemas: {
    ...pollSchema,
    ...candidateSchema,
    ...userSchema,
  },
};

module.exports = swaggerDocumentation;
