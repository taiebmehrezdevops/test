const express=require("express")
const connectDB=require("./config/connectDB")
const app=express()
const path = require('path');
app.use(express.json())
connectDB()

const port=5000
app.use("/api/auth",require("./routes/user"))
app.use("/api/product",require("./routes/product"))
app.use("/api/order",require("./routes/Order"))
app.use("/api/uploads", require("./routes/uploadRoute"));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.listen(5000,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})