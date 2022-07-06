const { Router } = require('express');
const pollsController = require('../../controllers/poll.controller');
const { verifyToken } = require('../../middlewares/verifytoken');

const router = Router();

router.get('/', pollsController.getPolls);
router.post('/', verifyToken, pollsController.createPoll);
router.get('/:status', pollsController.getPollsByStatus);
router.post(`/candidate/vote`, verifyToken, pollsController.voteCandidate);

module.exports = router;
