const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.methods.generateJWT = async function () {
  try {
    const jwtToken  = jwt.sign(
      {
        mongoId: this._id,
        userId: this.userId,
        email: this.email,
      },
      "23.>,232?/e@342",
      { expiresIn: "30d" }
    ); 
    return jwtToken;
  } catch (err){ 
    console.log("got an error while generating jwt",err.message)
  }
};  

const user = mongoose.model("user", userSchema);
module.exports = user;  