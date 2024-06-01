import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    room_no: {
      type: Number,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      unique: true,
    },
    price:{
      type:Number,
      required:true,
    },
    status:{
      type:String,
      enum:['Available', 'Occupied','Under Maintainence'],
      default:'Available',
    }
  },
  { timestamps: true }
);

export const Room = mongoose.model('Room', userSchema);
