const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./database/db_connect")
const cors = require("cors")
const userRoutes = require("./router/user-router")
const adminRouter = require("./router/admin/admin-routes")
const errorMiddleware = require("./middlewares/error-middleware")
const servicesRouter = require("./router/services-router")
const corss = {  
  origin: "http://localhost:5173",
  methods:"GET,POST,PATCH,PUT,DELETE,HEAD",
  credentials:true
}; 
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corss))
app.use(express.json())
 
app.use("/user",userRoutes);  
app.use("/admin", adminRouter);
app.use("/services",servicesRouter)
app.use(errorMiddleware)
dbConnect();  
app.listen(8000,()=>{
    console.log("Server Started")
})
