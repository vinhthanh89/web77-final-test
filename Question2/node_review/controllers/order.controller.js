import Order from "../models/order.model.js"

export const getOrder = async (req , res) => {
    try {
        const orders = await Order.find()

        return res.status(200).json({
            message : "lấy dữ liệu thành công",
            orders,
        })
    } catch (error) {
        return res.status(500).json({
            message : "lỗi sever"
        })
    }
}