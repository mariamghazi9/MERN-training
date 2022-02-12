var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/day6",{useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>
{
    console.log("connected")
})
const userSchema=new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        firstName:{
            type: String,
            required: true,
            minlength: 3,
            maxlength: 15
        },
        age:{
            type: Number,
            required: false,
            min: 13
        }
    }
,{
    versionKey: false 
})

const User=mongoose.model('users',userSchema)
module.exports=User;