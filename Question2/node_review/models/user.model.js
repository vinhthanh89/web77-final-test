import mongoose, { Schema } from "mongoose";

const Users = new Schema({
    username: {
        type: String,
        required: true,
    },
    password : {
        type : String , 
        require : true
    },
});


export default mongoose.model("Users", Users);