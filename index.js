const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const homeRoute=require("./routes/home")
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const app=express();
const PORT=9001

mongoose.connect("mongodb://127.0.0.1:27017/formDB").then(()=>{
    console.log("Mongo connected")
}).catch((err)=>{
    console.log(err)
})
app.use(bodyParser.json())
app.use(express.json())
app.use("/",homeRoute)
app.use(express.static("public"))
app.listen(PORT,()=>{console.log(`Server connected at port: ${PORT}`)})