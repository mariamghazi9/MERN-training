var mongoose = require('mongoose');


var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/day6",{useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>
{
    console.log("connected")
})
const todoSchema = new Schema(
    {
        userId:{
            type: mongoose.Types.ObjectId,
            required: true,
            unique: true
        },
        title:{
            type: String,
            required: true,
            min: 5,
            max: 20,
            index: true
        },
        status:{
            type: String,
            required: false,
            default: "to-do"
        }
    }
,{
    versionKey: false 
})

const Todo = mongoose.model('todos',todoSchema)
module.exports = Todo;