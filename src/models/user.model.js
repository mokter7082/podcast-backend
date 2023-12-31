const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    minLength: [3, "The length of username can be minimum 3 characters"],
  },
  password: {
    type: String,
    minLength: [3, "The length of username can be minimum 3 characters"],
    required: [true, "Password is required"],
    // set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["active", "inactive", "band"],
    default: "active",
  },
});

userSchema.pre("save", function (next) {
  const password = this.password;
  const hashPassword = bcrypt.hashSync(password);
  this.password = hashPassword;
  next();
});

userSchema.methods.compairePasswrod = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
