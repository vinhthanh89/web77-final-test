import Order from "../models/order.model.js"
import Inventory from "../models/inventory.model.js"

export const getOrder = async (req , res) => {
    try {
        const orders = await Order.find();
        const orderDetails = await Promise.all(orders.map(async order => {
            const inventoryItem = await Inventory.findOne({ sku: order.item });
            return {
                item: order.item,
                price: order.price,
                quantity: order.quantity,
                description: inventoryItem.description
            };
        }));

        return res.status(200).json({
            message : "lấy dữ liệu thành công",
            orderDetails,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "lỗi sever"
        })
    }
}