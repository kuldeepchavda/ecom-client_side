const products = require("../../model/product-model");
const storeRoom = require("../../storeRoom")
const addImage = async (req, res, next) => {

  try { 
    console.log(req.adminData);

    const addSomething = await products.create({
      productId: req.dest,
      image: req.file.filename,
    });  
    console.
    log(addSomething)

    req.imgRes = addSomething;

    console.log("Image uploaded");
    res.status(200).json({msg:addSomething})
    // next();
  } catch (error) {
    console.log("Error adding image", error.message);
    res.status(500).json({ error: error.message });
  }
};

const productData = async (req, res) => {
  try {;
    const {title,description,price,color} = req.body;
    // console.log(title,description)
    const data = {title,description,price,color}
    console.log("this is body",req.body)
    const productId = req.body.dest;
    const response = await products.updateMany(
      { productId: productId },
      { $set: data }
    );
         
    const responseObj = await products.find({
      productId: productId 
    });
    
    console.log(responseObj);
    res
      .status(200)
      .json({ msg:responseObj});
  } catch (error) {
    console.log("Error updating products", error );
    res.status(500).json({ error: error.message });  
  }
};


module.exports = { addImage, productData };
