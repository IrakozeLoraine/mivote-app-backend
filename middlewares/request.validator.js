const Joi = require('joi');

exports.validateRequest = (schema) => async (req, res, next) => {
  const { error } = Joi.validate(req.body, schema);

  if (error) {
    res.status(400).send(error.details[0].message);
    return false;
  }

  return next();
};
