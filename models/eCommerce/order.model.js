import mongoose from 'mongoose';
import { Product } from '../eCommerce/product.model';

const orderItemSchema = new mongoose.Schema({
  productId:{
    type:mongoose.Schema.types.ObjectId,
    ref:"Product",
  },
  quantity:{
    type:Number,
    required:true,
  },

})

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  orderItems:{
    type:[orderItemSchema]
  },
  address:{
    type:String,
    required:true,
  },
  orderStatus:{
    type:String,
    enum:['PENDING','CANCELLED','DElIVERED'],
    default:'PENDING',
  }
  
},{timestamps:true})

export const Order = mongoose.model("Order", orderSchema)