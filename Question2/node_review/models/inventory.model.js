import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const Inventory = new Schema({
    _id : {
        type : Number,
    },
    sku: {
        type: String,
        required: true,
    },
    description : {
        type : String , 
        require : true
    },
    quantity : {
        type : Number , 
        require : true
    },
});


export default mongoose.model("Inventorys", Inventory);