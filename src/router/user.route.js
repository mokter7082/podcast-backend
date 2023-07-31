const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/users/").get(userController.getUsers).post(userController.saveUser);

module.exports = router;
