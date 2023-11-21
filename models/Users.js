const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, requried: true, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  });
 
const User = mongoose.model("User", userSchema);


module.exports = { User };
