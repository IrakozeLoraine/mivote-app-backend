const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { checkPhoneNumberAvailable } = require('../services/checkPhone');

exports.register = async (req, res) => {
  try {
    const dob = new Date(req.body.dob).getFullYear();

    if (new Date().getFullYear() - dob < 18)
      return res
        .status(400)
        .send({ message: 'You must be 18 years or older to register' });

    if (await checkPhoneNumberAvailable(req.body.phone))
      return res
        .status(409)
        .send({ message: 'User with the same phone number already exist' });

    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      ...req.body,
      password: encryptedPassword,
    });

    const foundUser = newUser.toJSON();
    delete foundUser.password;

    const token = jwt.sign(
      {
        user_id: foundUser._id,
        phone: foundUser.phone,
      },
      'mivote_secret',
      { expiresIn: '1d' }
    );
    foundUser.token = token;

    return res.status(201).send({ message: 'User created!', data: foundUser });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });

    if (!user) {
      return res.status(400).send({ message: 'User does not exist' });
    } else {
      const foundUser = user.toJSON();
      delete foundUser.password;
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword)
        return res.status(400).send({ message: 'Invalid credentials' });

      const token = jwt.sign(
        {
          user_id: user._id,
          phone: user.phone,
        },
        'mivote_secret',
        { expiresIn: '1d' }
      );
      foundUser.token = token;

      return res
        .status(200)
        .send({ message: 'User logged in!', data: foundUser });
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
