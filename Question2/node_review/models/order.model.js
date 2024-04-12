import mongoose, { Schema } from "mongoose";

const Order = new Schema({
    _id : {
        type : Number,
    },
    item: {
        type: String,
        required: true,
    },
    price : {
        type : Number , 
        require : true
    },
    quantity : {
        type : Number , 
        require : true
    },
});


export default mongoose.model("Orders", Order);