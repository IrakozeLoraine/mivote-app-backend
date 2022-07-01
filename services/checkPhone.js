const User = require('../models/User');

exports.checkPhoneNumberAvailable = async (phone_number) => {
  const user = await User.findOne({
    phone: phone_number,
  });

  if (user) return true;

  return false;
};
