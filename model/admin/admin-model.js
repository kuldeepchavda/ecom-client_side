const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const adminModal = new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String
    },
    adminId:{
        type:String,
    }

})

adminModal.methods.generateAdminJWT = async function () {
  try {
    const jwtToken = jwt.sign(
      {
        mongoId: this._id,
        adminId: this.adminId,
        email: this.email,
      }, 
      "23.>,232?/e@342_admins",
      { expiresIn: "30d" }
    );
    return jwtToken;
  } catch (err) {
    console.log("got an error while generating jwt", err.message);
  }
};  

const adminSchema = new mongoose.model("admin",adminModal)
module.exports = adminSchema