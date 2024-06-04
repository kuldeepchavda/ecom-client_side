const mongoose = require("mongoose")

const productModel = mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
 
  color: {
    type: String,
  },
  productId:{
    type:String
  }
});

const productSchema = new mongoose.model("product",productModel)
module.exports = productSchema