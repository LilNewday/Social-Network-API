const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    // Define the reactionId field
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    // Define the reactionBody field
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    // Define the username field
    username: {
      type: String,
      required: true
    },
    // Define the createdAt field (for getting the date)
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = ReactionSchema;
