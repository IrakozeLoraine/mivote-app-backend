const candidatesController = require('../controllers/candidate.controller');
const authController = require('../controllers/auth.controller');
const pollsController = require('../controllers/poll.controller');

const pollEndpoint = '/api/v1/polls';
const candidateEndpoint = '/api/v1/candidates';
const authEndpoint = '/api/v1/auth';

module.exports = (app) => {
  app.post(pollEndpoint, pollsController.createPoll);

  /**
   * @swagger
   * /api/v1/polls:
   *   get:
   *     summary: Retrieve a list of polls
   *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
   *     responses:
   *       200:
   *         description: A list of users.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       id:
   *                         type: integer
   *                         description: The user ID.
   *                         example: 0
   *                       name:
   *                         type: string
   *                         description: The user's name.
   *                         example: Leanne Graham
   */
  app.get(pollEndpoint, pollsController.getPolls);
  app.get(`${pollEndpoint}/:status`, pollsController.getPollsByStatus);
  app.post(`${pollEndpoint}/candidate/vote`, pollsController.voteCandidate);

  app.post(candidateEndpoint, candidatesController.createCandidate);
  app.get(
    `${candidateEndpoint}/:poll_id`,
    candidatesController.getCandidatesByPoll
  );

  app.post(`${authEndpoint}/register`, authController.register);
  app.post(`${authEndpoint}/login`, authController.login);
};
