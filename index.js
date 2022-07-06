const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const swaggerUi = require('swagger-ui-express');
const swaggerDocumentation = require('./helpers/swaggerDocumentation');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

const port = 4500;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);

  // swagger docs
  // swaggerDocs(app, port);
});
