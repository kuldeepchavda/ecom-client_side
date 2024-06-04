const admins = require("../../model/admin/admin-model");
const storeroom = require("../../storeRoom");
const bcrypt = require("bcrypt");
const createAdmin = async (req, res) => {
  const { email, password } = req.body;
  const adminId = storeroom.randomId();
  const hashedPass = await bcrypt.hash(password, 10);
  const response = await admins.create({
    email,
    adminId,
    password: hashedPass,
  });

  if (response) {
    res
      .status(200)
      .json({ msg: response, jwt: await response.generateAdminJWT() });
  }
};
const checkAdmin = async (req, res) => {
  console.log("initiated")
  const { email, password } = req.body;
  const existingAdmin = await admins.findOne(
    {email:email}
  );
console.log(existingAdmin)
  if (!existingAdmin) {
    res.status(200).json({ msg:  "not admin" });
  } else {
    const truePassword = await bcrypt.compare(password, existingAdmin.password);
    if (truePassword) {
      res.status(200).json({ msg: true ,jwt :await existingAdmin.generateAdminJWT()});
    } else {
      res.status(200).json({ msg: false }); 
    }
  }
};

const addProducts =async (req,res)=>{
res.status(200).json({ms:"Got there "})
}

module.exports = { checkAdmin, createAdmin, addProducts };
