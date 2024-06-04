const express = require("express"); 
const router = express.Router();
const servicesController = require("../controllers/services-controller");
const userMiddleware = require("../middlewares/user-middleware");
router.route("/product/:id").get(servicesController.productData)
router.route("/allproducts").get(servicesController.getAllProducts);
router.route("/orders").post(userMiddleware, servicesController.orderProduct);
router.route("/allorders").get(servicesController.allOrders);
module.exports = router