import express from "express"
import { getAllInventory, getInventoryLT} from "../controllers/inventory.controller.js"
import { authentication } from "../middlewares/authentication.js"

const router = express.Router()

router.get("/get-all-product" , authentication , getAllInventory)
router.get("/get-product-less-than" , authentication , getInventoryLT)


export default router