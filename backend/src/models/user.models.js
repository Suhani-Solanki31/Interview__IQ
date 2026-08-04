import mongoose from "mongoose";

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    credit: {
      type: Number,
      default: 100,
    },
  },
  {
    timestamps: true,
  },
);



export const User = mongoose.model("User",userSchema);

