import mongoose from "mongoose"

// const userScheme =new mongoose.Schema(
//   {
//     username:String,
//     email: String,
//     isDone: Boolean
//   }
//   )

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "Password is a must"],
      unique: true,
      lowercase: true
    }
  },{timestamps:true}
);


export const User = mongoose.model("User", userScheme)
