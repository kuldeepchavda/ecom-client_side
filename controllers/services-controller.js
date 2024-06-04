const products = require("../model/product-model")
const orders = require("../model/orders-model");
const { all } = require("../router/services-router");

const productData = async (req,res)=>{
  const id = req.params.id
  const productData = await products.findOne({ productId: id });
  res.status(200).json({ msg: productData });
}
const getAllProducts = async (req, res) => {
  const response = await products.find();
  res.status(200).json({ msg: response });
};

const orderProduct =async (req,res)=>{
try {
   const { fullname, address, pincode, qty, paymentmethod, productid } =
     req.body;
     
     const email = req.userData.email;
     const userid = req.userData.userId; 
    //  console.log("data", );
 
    const response = await orders.create({
      fullname,
      address,
      pincode,
      qty,
      paymentmethod,
      productid,
      email,
      userid,
    });
   res.status(200).json({ status:"ok", msg: response});

} catch (error) {
  console.log(error)
} 
}

const allOrders = async (req,res)=>{
  const response = await orders.find();
  res.status(200).json({msg:response})
}

module.exports = { productData, getAllProducts ,orderProduct,allOrders};