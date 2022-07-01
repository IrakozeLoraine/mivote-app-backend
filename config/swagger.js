const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const version = require('../package.json').version;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MiVote REST API docs',
      version,
      description: 'A simple Voting system API for the community',
    },
    servers: [
      {
        url: 'http://localhost:4500',
      },
    ],
    // components: {
    //   securitySchemas: {
    //     bearerAuth: {
    //       type: 'http',
    //       scheme: 'bearer',
    //       bearerFormat: 'JWT',
    //     },
    //   },
    // },
    // security: [
    //   {
    //     bearerAuth: [],
    //   },
    // ],
  },
  apis: ['../routes/index.js'],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {
  //swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  //docs in JSON format
  app.get('docs.json', (req, res) => {
    res.setHeaders('Content-Type', 'application/json');
    res.send(swaggerDocument);
  });
  console.log(`Swagger docs are available at http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
