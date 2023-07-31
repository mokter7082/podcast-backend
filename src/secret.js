require("dotenv").config()
const mongoUrl = process.env.MONGODB_ATLAS_URI;
const serverPort = process.env.SERVER_PORT || 8000;



module.exports = {mongoUrl,serverPort}