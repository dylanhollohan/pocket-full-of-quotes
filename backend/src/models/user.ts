import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please include an email address'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
      type: String,
      required: [true, 'Please include a password'],
      minlength: [12, 'Password should have at least 12 characters']
    },
    username: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);