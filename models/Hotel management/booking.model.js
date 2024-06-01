import mongoose from "mongoose"

const booking = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId;
    ref:'User',
    required:true
  },
  room:{
    type:mongoose.Schema.Types.ObjectId;
    ref:'Room',
    required:true
  },
  checkInDate:{
    type:Date,
    required:true,
  },
  checkOutDate:{
    type:Date,
    required:true,
  },
  status:{
    type:String,
    enum:['booked', 'checkedout', "checkedin", 'cancelled'],
    default:'booked',
  }
},{timestamps:true})

export const Booking = mongoose.model('Booking',userSchema)