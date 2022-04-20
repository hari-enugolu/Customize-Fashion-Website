import mongoose from "mongoose";
let userSchema  = new mongoose.Schema({
firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
    },
    role:{
        type: String,
        enum: ["manufacturer", "customer"],
        default: "customer"
        },
    emailId:{
        type:String, 
        required:true, 
        unique:true,
        match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    },
    password:{type:String, required:true}
})

let User = mongoose.model('User',userSchema);

export default User;