const mongoose=require("mongoose")
const schema=mongoose.Schema
let usersSchema=new schema({
    username:{
        type:String,
        required: true
    },
    pass:{
        type:String,
        // required: true
    },
    phone:{
        type:String
    },
    email:{
        type:String,
        // required: true
    },
    idno:{
        type:String,
        // required: true
    },
    gender:{
        type:String
    },
    dateofbirth:{
        type:Number
    },
    textarea:{
        type:String
    }
})
module.exports= mongoose.model("ajaxdata1",usersSchema)