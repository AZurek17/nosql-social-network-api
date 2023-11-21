const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {   },//mg objectID and default value
  reactionBody: { type: String, required: true,  },//add max 280 characters
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // use a getter method to format the timestamp on query
  });
 
const Reactions = mongoose.model("Reactions", reactionSchema);

module.exports = { Reactions };
