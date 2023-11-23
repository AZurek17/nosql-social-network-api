const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({ 
  reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  reactionBody: { type: String, required: true, max: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp) }, // use a getter method to format the timestamp on query
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  }
  );


const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, min: 1, max: 280 },
  createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp) }, //verify getter method
  username: { type: String, required: true },
  reactions: [reactionSchema] 
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  });

thoughtSchema.virtual("reactionCount").get(function() {
  return this.reactions.length;
});


const Thought = model("Thought", thoughtSchema);
const Reaction = model("Reaction", reactionSchema);


module.exports = { Thought, Reaction };
