const mongoose=require('mongoose')
const Schema=mongoose.Schema

const autherSchema=new Schema({
  name:String,
  age:Number,
  
})
module.exports=mongoose.model("Auther",autherSchema)