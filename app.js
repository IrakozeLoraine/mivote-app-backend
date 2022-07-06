require('./config/db').connect();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const candidateRouter = require('./routes/candidate');
const pollRouter = require('./routes/polls');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/polls', pollRouter);
app.use('/api/v1/candidates', candidateRouter);

module.exports = app;
