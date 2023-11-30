import mongoose from "mongoose";
const dbmsQASchema=mongoose.Schema({
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

export default  mongoose.model("dbms",dbmsQASchema);