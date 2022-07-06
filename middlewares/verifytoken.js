const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
      return res.status(403).send('A token is required for authentication');
    }

    const decoded = jwt.verify(token, 'mivote_secret');
    req.user = decoded;
  } catch (err) {
    console.log(err.message);
    return res.status(401).send('Invalid Token');
  }
  return next();
};
