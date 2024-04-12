import mongoose from "mongoose";
import Inventory from "./models/inventory.model.js"
import Users from "./models/user.model.js"
import Order from "./models/order.model.js"

const url = "mongodb+srv://vinhthanh89:P%40ssw0rd@cluster0.8twozai.mongodb.net/web77-finaltest"

const inventory = [
  { _id : 1, sku : "almonds", description: "product 1", instock : 120 },
  { _id : 2, sku : "bread", description: "product 2", instock : 80 },
  { _id : 3, sku : "cashews", description: "product 3", instock : 60 },
  { _id : 4, sku : "pecans", description: "product 4", instock : 70 },
]

const order = [
  { _id : 1, item : "almonds", price : 12, quantity : 2 },
  { _id : 2, item : "pecans", price : 20, quantity : 1 },
  { _id : 3, item : "pecans", price : 20, quantity : 3 },
]

const users = [
	{username: "admin", password: "MindX@2022"},
	{username: "alice", password: "MindX@2022"}
]

const connectToDb = async () => {
    try {
        await mongoose.connect(url);
        // await Inventory.insertMany(inventory);
        // await Users.insertMany(users);
        // await Order.insertMany(order);
        console.log("Database connect successful");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDb;
