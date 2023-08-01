const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../secret");

module.exports.tokenVerify = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[0];
    if (!token) {
      return res.status(401); // Unauthorized
    }
    const decoded = promisify(jwt.verify)(token, tokenSecret);
    req.user = decoded;
  } catch (error) {
    return res.status(403).json({
      isSuccess: false,
      message: "Invalid token",
      error,
    });
  }
};
