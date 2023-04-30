const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    // Define the username field
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is Required",
    },

    // Define the email field
    email: {
      type: String,
      unique: true,
      required: "Username is Required",
      match: [/.+@.+\..+/],
    },

    // Define the thoughts field as an array of ObjectIds referencing the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    // Define the friends field as an array of ObjectIds referencing the User model
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Define a virtual property on the User schema to compute the number of friends
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
