const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Relates to the User model
    required: true,
  },
});

module.exports = mongoose.model("Farm", farmSchema);
