import express from "express"
import { getOrder } from "../controllers/order.controller.js"
import { authentication } from "../middlewares/authentication.js"

const router = express.Router()

router.get("/get-order" , authentication , getOrder)


export default router