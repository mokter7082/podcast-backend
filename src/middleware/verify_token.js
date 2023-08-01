const { tokenSecret } = require("../secret");
const jwt = require("jsonwebtoken");

module.exports.verifyJwt = (req, res, next) => {
  const token = req.headers.authorization; // Assuming JWT is sent in the Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, tokenSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // If the token is valid, you can attach the decoded payload to the request for use in subsequent middleware/route handlers
    req.user = decoded;
    next();
  });
};
