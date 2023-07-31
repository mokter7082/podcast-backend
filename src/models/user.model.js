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
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBand: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre('save', function(next) {

  const password = this.password
  const hashPassword = bcrypt.hashSync(password)
  this.password = hashPassword
  
  next()
});

const User = mongoose.model("User", userSchema);

module.exports = User;
