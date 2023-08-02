const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../secret");
const { getUserByEmail } = require("../utils/helper");

module.exports.tokenVerify = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];
    if (!token) {
      return res.status(403).json({
        isSuccess: false,
        message: "Unauthorized",
      });
    }
    console.log("token", token);
    const decoded = await promisify(jwt.verify)(token, tokenSecret);
    const user = await getUserByEmail(decoded?.email);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({
      isSuccess: false,
      message: "Invalid token",
      error,
    });
  }
};
