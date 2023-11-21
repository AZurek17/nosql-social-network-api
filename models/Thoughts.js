const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true,  },//add must be between 1-280 characters
  createdAt: { type: Date, default: Date.now }, 
  username: { type: String, required: true },
  reactions: [{ type: Schema.Types.ObjectId, ref: "Reactions" }],  //verify if type is array
  });
 
const Thoughts = mongoose.model("Thoughts", thoughtSchema);


module.exports = { Thoughts };
