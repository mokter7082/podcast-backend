const app =require("./app.js");
const dbConnect = require("./config/db.js");
const { serverPort } = require("./secret.js");



app.listen(serverPort, async() => {
  console.log(`Example app listening on port http://localhost:${serverPort}/`);
  await dbConnect()
});
