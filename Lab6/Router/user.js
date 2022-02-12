const express = require("express");
const router = express.Router();
const User = require("../user_model")
const Todo = require("../todo_model")

var jwt = require('jsonwebtoken');


router.post("/register", function (req, res) {
  var user = { username: req.body.username, password: req.body.password, firstName: req.body.firstName };
  User.create(user);
  var token = jwt.sign(user, "key");
  res.send("User was registered successfully"+"\n"+token);
});

router.post("/login", function (req, res) {
    try{
        var user = jwt.verify(req.headers.authorization,"key")

        User.findOne({"username": user.username},(err, data)=>{
            Todo.find({"userId": data._id},(err, todoList)=>{
                if(err) console.log("no todo list")
                res.send("Logged in successfully "+ data.username+"\n"+"Todos: "+ todoList)
            })
        })
        }
        catch(err)
        {
            res.send(401, "invaild credentials")
        }
  });

router.get("/",(req,res)=>
{
    User.find({},(err,data)=>{
        if(err) console.log("no registered users")
        res.send(data)
    })
})

router.delete("/:username",(req,res)=>
{
    User.deleteOne({"username": req.params.username},(err,data)=>{
        if(err) console.log("not found")
        res.send(data)
    })
})

router.patch("/:username",(req,res)=>
{
    User.updateOne({"username": req.params.username},{$set: {"firstName": req.body.firstName}},(err,data)=>{
        if(err) console.log("not found")
        User.findOne({"username": req.params.username},(err, user)=>{
            res.send("User after edit: "+ user)
        })
    })
})




  
module.exports=router;
