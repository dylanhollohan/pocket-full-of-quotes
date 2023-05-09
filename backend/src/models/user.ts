import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minLength: 12
    },
    username: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);