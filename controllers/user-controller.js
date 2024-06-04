const user = require("../model/user-model");
const bcrypt = require("bcrypt");
const storeroom = require("../storeRoom")
const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailExists = await user.findOne({ email });
    if (emailExists) {
      res.status(300).json({ msg: "The entered email already exists." });
    } else {
      const hashed_pass = await bcrypt.hash(password, 4);
      const userId = storeroom.randomId()
      const response = await user.create({
        email,
        userId,
        password: hashed_pass,
      });
      res.status(200).json({
        msg: "Registered Successfully",
        jwt: await response.generateJWT(),
      });
    }
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingEmail = await user.findOne({ email: email });
    if (!existingEmail) {
      res.status(300).json({ msg: "Email does not exists,first sign in" });
    } else {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingEmail.password
      );
     if(isPasswordCorrect){
      // const jwtToken = await existingEmail.generateJWT()
      res  
        .status(200)
        .json({
          msg: "Logged in Successfully",
          jwt: await existingEmail.generateJWT(),
        });
        console.log("logged in")
     } else{
      res.status(200).json({msg:"The password is incorect"})
     }
    }
  } catch (error) {
    console.log("error occured in login", error);
  }
};

module.exports = { signup, login };
