import mongoose from 'mongoose';

const { Schema } = mongoose;

const quoteSchema = new Schema(
  {
    author: {
      type: String,
      default: "unknown",
    },
    body: {
      type: String,
      required: true,
    },
    source: String,
  },
  { timestamps: true }
);

export const Quote = mongoose.model("Quote", quoteSchema);
