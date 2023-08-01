const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { verifyJwt } = require("../middleware/verify_token");
router
  .route("/users/")
  .get(userController.getUsers)
  .post(userController.saveUser);
router.route("/user/login").post(userController.userLogin);
router.route("/user/me", verifyJwt).get(userController.getMe);


module.exports = router;
