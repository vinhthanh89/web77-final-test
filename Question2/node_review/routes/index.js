import express from "express";
import userRouter from "./user.router.js"
import inventoryRouter from "./inventory.router.js"
import orderRouter from "./order.router.js"

const router = express.Router();

router.use("/inventory" , inventoryRouter)
router.use("/user" , userRouter)
router.use("/order" , orderRouter)

export default router;
