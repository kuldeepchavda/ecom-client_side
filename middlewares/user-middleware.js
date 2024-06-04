const jwt = require("jsonwebtoken");
const users = require("../model/user-model");
const userMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "").trim();
    const verfiedToken = jwt.verify(token,"23.>,232?/e@342");
    const userData = await users.findOne({ email: verfiedToken.email });
    if (userData) {
      req.isUser = true;
      req.userData = userData;
    }  
    req.isUser = false;
    next();
  } catch (error) {
    console.log("Error occured in user middleware:-", error.message);
  }
};
module.exports = userMiddleware;