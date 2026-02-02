//this is schema of todo , tells kind of properties todo has
import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  text:{
    type:String,
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  }
},{timestamps:true})
const Todo=mongoose.model("Todo",todoSchema);
export default Todo;