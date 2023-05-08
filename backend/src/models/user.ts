import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);