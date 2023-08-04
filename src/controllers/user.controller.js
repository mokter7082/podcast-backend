const userService = require("../services/user.service");
const { generateJSONWebToken } = require("../utils/generate_token");
const { getUserByEmail } = require("../utils/helper");

module.exports.saveUser = async (req, res) => {
  try {
    const result = await userService.saveUserService(req.body);
    if(!result){
      return res.status(200).json({
        isSuccess: true,
        message: "Signed up field",
      });
    }
    const token = generateJSONWebToken(result);
    return res.status(200).json({
      isSuccess: true,
      message: "Susscessfully signed up",
token:token,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      isSuccess: false,
      error,
    });
  }
};
module.exports.getUsers = async (req, res) => {
  try {
    const result = await userService.getUserService();
    res.status(200).json({
      isSuccess: true,
 
      data: result,
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
/**
 * @route POST /users/login
 * @description
 * @returns {Object} users -after login returned JWT token
 */
module.exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1.Check if email and passwird are given
    if (!email || !password) {
      return res.status(401).json({
        isSuccess: false,
        message: "Please Provide your credential",
      });
    }
    // 2.Load user with email
    const user = await getUserByEmail(email);
    // 3.if not user send res
    if (!user) {
      return res.status(401).json({
        isSuccess: false,
        message: "User not found ! please create an account first",
      });
    }
    // 4.compaire password
    const isPasswordValid = user.compairePasswrod(password, user.password);
    // 5.if password not corret send res
    if (!isPasswordValid) {
      return res.status(403).json({
        isSuccess: false,
        message: "Please provide a valid credential",
      });
    }
    const { password: pwa, ...other } = user.toObject();
    // 6.if password and email currect token generate & sent token
    const token = generateJSONWebToken(user);

    return res.status(200).json({
      isSuccess: true,
      message: "User successflly logged in",
      token: token,
      user: other,
    });
  } catch (error) {
    return res.send({
      isSuccess: false,
      error,
    });
  }
};

module.exports.getMe = async (req, res) => {
  try {
    return res.send(req.user);
  } catch (error) {
    return res.status(500).json({
      isSuccess: false,
      error,
    });
  }
};
