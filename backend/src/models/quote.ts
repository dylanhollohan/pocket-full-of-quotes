import mongoose from 'mongoose';

const { Schema } = mongoose;

const quoteSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "unknown",
    },
    content: {
      type: String,
      required: true,
    },
    source: String,
  },
  { timestamps: true }
);

export const Quote = mongoose.model("Quote", quoteSchema);
