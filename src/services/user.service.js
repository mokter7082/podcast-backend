const User = require("../models/user.model");

module.exports.getUserService = async () => {
  const result = await User.find();
  return result;
};
module.exports.saveUserService = async (userInfo) => {
  const result = await User.create(userInfo);
  return result;
};
