const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../secret");

exports.generateJSONWebToken = (userInfo) => {
  const payload = {
    name: userInfo?.name,
    email: userInfo?.email,
  };
  const token = jwt.sign(payload, tokenSecret, { expiresIn: 60 * 60 });
  return token;
};
