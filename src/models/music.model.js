const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    reqquired: [true, "Music title is required"],
  },
});
