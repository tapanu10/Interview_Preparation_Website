import mongoose from "mongoose";
const osQASchema=mongoose.Schema({
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

export default  mongoose.model("operatingsystem",osQASchema);