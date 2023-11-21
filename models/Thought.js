const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({ 
  reactionId: { type: mongoose.Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  reactionBody: { type: String, required: true, max: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp) }, // use a getter method to format the timestamp on query
  });

const Reaction = mongoose.model("Reaction", reactionSchema);

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, min: 1, max: 280 },
  createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp) }, //verify getter method
  username: { type: String, required: true },
  reactions: [reactionSchema] 
  });

thoughtSchema.virtual("reactionCount").get(function() {
  return this.reactions.length;
});


const Thought = mongoose.model("Thought", thoughtSchema);


module.exports = { Thought, Reaction };
