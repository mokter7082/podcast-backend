const userService = require("../services/user.service");

module.exports.saveUser = async (req, res) => {
  try {
    const result = await userService.saveUserService(req.body);
    return res.status(200).json({
      isSuccess: true,
      message: "Susscessfully signed up",
      data: result,
    });
  } catch (error) {
   return res.status(500).json({
    isSuccess:false,
    error
   })
  }
};
module.exports.getUsers = async (req, res) => {
  try {
    const result = await userService.getUserService();
    res.status(200).json({
      isSuccess: true,
      message: "All users returned",
      data: result,
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
