require("dotenv").config()
const mongoUrl = process.env.MONGODB_ATLAS_URI;
const serverPort = process.env.SERVER_PORT || 8000;
const tokenSecret = process.env.TOKEN_SECRET || "user_token";

module.exports = { mongoUrl, serverPort, tokenSecret };