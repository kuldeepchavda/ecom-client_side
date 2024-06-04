    const jwt = require("jsonwebtoken")
    const users = require("../model/user-model")
    const storeRoom = require("../storeRoom")
    const admins = require("../model/admin/admin-model")
const { trusted } = require("mongoose")
    const adminMiddleware = async (req,res,next)=>{  
        try {
            const token = req.header("Authorization").replace("Bearer","").trim();
             
            console.log("initiATED".toLowerCase(),token)
            const verifiedData = jwt.verify(token,"23.>,232?/e@342_admins"); 
        const adminData = await admins.findOne({email:verifiedData.email})
        
        console.log(verifiedData)
        // req.dest = storeRoom.randomProductId().toString();
       req.adminData = adminData
       res.status(200).json({ token:adminData  });
    // next();
    } catch (error) {
        console.log("Admin middleware",error )
    }
}

    module.exports = adminMiddleware