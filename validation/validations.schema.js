const Joi = require('joi');

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *       - names
 *       - phone
 *      - dob
 *      - password
 *     properties:
 *      names:
 *        type: string
 *        default: Jane Doe
 *      phone:
 *        type: string
 *        default: 0788102030
 *     dob:
 *        type: date
 *        default: 2020-01-01
 *      password:
 *        type: string
 *        default: stringPassword123
 *
 *    CreateUserResponse:
 *      type: object
 *     properties:
 *      names:
 *        type: string
 *      phone:
 *        type: string
 *     dob:
 *        type: date
 *     _id:
 *        type: string
 *     createdAt:
 *        type: string
 *
 */

exports.validateUser = Joi.object().keys({
  names: Joi.string().required(),
  phone: Joi.string().required(),
  dob: Joi.date().required(),
  password: Joi.string().required(),
});

exports.validateCandidate = Joi.object().keys({
  user_id: Joi.string().required(),
  poll_id: Joi.string().required(),
  votes: Joi.number().default(0),
  bio: Joi.string(),
  goals: Joi.string(),
  party: Joi.string(),
});

exports.validatePoll = Joi.object().keys({
  name: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  status: Joi.string().valid('ONGOING', 'CLOSED', 'CANCELLED', 'PENDING'),
});

exports.validateUserPoll = Joi.object().keys({
  user_id: Joi.string().required(),
  poll_id: Joi.string().required(),
  candidate_id: Joi.string().required(),
});
