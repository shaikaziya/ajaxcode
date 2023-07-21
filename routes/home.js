const express = require("express")
const Router = express.Router()
const User = require("../models/user")
let formidable = require("formidable")
var fs = require('fs');
var path = require('path');
const bodyParser=require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
Router.get("/", (request, response) => {
    response.send("Hi Aziya")
})
Router.get("/index.html", (request, response) => {
    response.sendFile(path.join(__dirname + "/index.html"))
})
// Router.get("/", (req, res) => {
//     res.render("index")
// })
Router.post('/postpath', urlencodedParser, function (req, res) {    
     
        const username=req.body.username 
        const pass=req.body.pass
        const phone=req.body.phone
        const email=req.body.email
        const gender=req.body.gender
        const dateofbirth=req.body.dateofbirth
        const textarea=req.body.textarea
        const user = new User({ username: username,pass:pass,phone:phone, email: email,gender:gender,dateofbirth:dateofbirth, 
            textarea:textarea})
        console.log(user)
        user.save().then(() => {
            res.redirect("/")
        })
            .catch((err) => {
                console.log(err)
            })

 }) 

// Router.post("/add", (req, res) => {
//     const form = new formidable.IncomingForm()
//     form.parse(req,function(err,fields,files){
        
//         firstname = fields.firstname.toString();
//         lastname = fields.lastname.toString()
//         email = fields.email.toString();
//         idno = fields.idno.toString();
//         image = files.image[0].originalFilename;

//         let oldPath=files.image[0].filepath;        
//         let newPath = path.join("E:","Programs","mongoose-CURD","public","uploads")
//             + '/' + files.image[0].originalFilename

//         let rawData=fs.readFileSync(oldPath)
//         fs.writeFile(newPath,rawData,function(err){
//             if(err){
//                 console.log(err)
//             }
//             // return res.send("Successfully uploaded")
//             // res.redirect("/")
//         })


//         const user = new User({ firstname, lastname, email, idno });
//         user.image = image;
//         user.save().then(() => {
//             console.log('Data saved to mongodb successfully');
//             res.redirect("/")
//         }).catch((err) => {
//             console.log(err);
//             console.log("error happened")
//         })

//     })
// })

module.exports = Router