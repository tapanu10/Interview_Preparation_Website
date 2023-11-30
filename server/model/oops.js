import mongoose from "mongoose";
const oopsQASchema=mongoose.Schema({
    question:{
        type:String,
        default:"",
        required: true
    },
    answer:{
        type:String,
        default:"",
        required:true
    }
});

export default  mongoose.model("oops",oopsQASchema);