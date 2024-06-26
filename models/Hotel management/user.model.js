import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    phone_no: Number,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
