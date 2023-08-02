// Route to get a specific user
/**
 * @route GET /users/:email
 * @param {string} - The wmail of the user.
 * @description Get a specific user by email
 * @returns {Object} user - The user object.
 * @throws {404} Not Found - If the user with the given ID is not found.
 */

const User = require("../models/user.model");

exports.getUserByEmail = async (email) => {
  return await User.findOne({ email });
};
