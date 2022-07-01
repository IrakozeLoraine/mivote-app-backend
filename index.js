const http = require('http');
const app = require('./app');
const server = http.createServer(app);
// const swaggerDocs = require('./config/swagger');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
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
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = 4500;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);

  // swagger docs
  // swaggerDocs(app, port);
});
