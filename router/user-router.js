const express = require("express")
const router = express.Router()
const controller = require("../controllers/user-controller")
const validate = require("../middlewares/verifyMiddleware"); 
const signupSchema = require("../validators/auth-validators")
const userMiddleware = require("../middlewares/user-middleware")
router.route("/").get((req,res)=>{
    res.status(200).json({msg:"This is message from user end point."})
})
router.route("/signup").post(validate(signupSchema),controller.signup);
  router.route("/login").post(controller.login)
  router.route("/usermiddleware").get(userMiddleware)
 module.exports = router  