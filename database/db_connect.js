const mongoose = require("mongoose");

const uri =   
  "mongodb+srv://studentsData:kuldeepchavda@cluster0.mpscamc.mongodb.net/Ecommerce?retryWrites=true&w=majority";
  // "mongodb+srv://ecomdemo:ecomdemo@cluster0.mpscamc.mongodb.net/ecomdata?retryWrites=true&w=majority";

const dbConnect = async () => {  
  try { 
    // console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(uri);
    // console.log("Successfully co  nnected to MongoDB");
console.log("Database Connected")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  } 
};

module.exports = dbConnect;    