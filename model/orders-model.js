const mongoose = require("mongoose")
const ordersmodel = mongoose.Schema({
  userid: {       //from token
    type: String,
  }, 
  productid: {    // FE
    type: String,
  },
  qty: {          //FORM
    type: String,
  },
  address: {      //FORM
    type: String,
  },
  pincode: {        // FORM
    type: String,
  },
  fullname: {       //FORM
    type: String,
  },
  paymentmethod: {  //FORM
    type: String,
  },
  email: {        //from token
    type: String,
  },
});
 
 const ordersdata = new mongoose.model("ordersdemo",ordersmodel)
 module.exports = ordersdata