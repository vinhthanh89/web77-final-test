import Inventory from "../models/inventory.model.js"

export const getAllInventory = async (req , res) => {
    try {
        const products = await Inventory.find()

        return res.status(200).json({
            message : "lấy dữ liệu thành công",
            products
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "lỗi sever",
            error
        })
    }
}

export const getInventoryLT = async (req ,res) => {
    try {
        const products = await Inventory.find({instock : {$lt : 100}})

        return res.status(200).json({
            message : "lấy dữ liệu thành công",
            products
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "lỗi sever",
            error
        })
    }
}