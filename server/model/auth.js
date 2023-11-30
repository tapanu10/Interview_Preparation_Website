import mongoose from "mongoose";


const userSchema=mongoose.Schema({
    name:{
        type:String,
        default:"",
        required:true
    },
    email:{
        type:String,
        default:"",
        required:true,
        unique:true
    },
    password:{
        type:String,
        default:""
    }
});

export default  mongoose.model("UserDetail",userSchema);