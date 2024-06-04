const n = require("../model/user-model")
const sendMessage = async(req,res)=>{
try {
    const name = "Kuldeep Chavda"
const response = await n.create({ name});
// console.log("response",response)  
res.status(200).json({msg:response})
} catch (error) {
    console.log("Got an error",error)
}}

module.exports = { sendMessage };  