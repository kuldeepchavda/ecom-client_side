const express = require("express");
const router = express.Router();
const adminMiddleware = require("../../middlewares/admin-middleware")
const controller = require("../../controllers/admin/admin-controller")
const productAddController = require("../../controllers/admin/add-products-controller")
const multer = require("multer");
const path = require("path");
const storeRoom = require("../../storeRoom")

// images-section  
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    req.dest = storeRoom.randomProductId().toString();
    console.log("This is path", req.dest);
    cb(null, "public/images"); 
  },
  filename: (req, file, cb) => {
    console.log("from admin-router.",req.dest)
    cb(null, req.dest + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
router.route("/create").post(controller.createAdmin);
router.route("/login").post(controller.checkAdmin); 
router.route("/adminmiddleware").get(adminMiddleware)

  
// add products  
router
  .route("/product/image")  
  .post(
    // adminMiddleware  ,
    upload.single("file"),
    productAddController.addImage
  );

  router.route("/product/data").patch(productAddController.productData)
module.exports = router;