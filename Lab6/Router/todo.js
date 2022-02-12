const express = require("express");
const router = express.Router();
const User = require("../user_model");
const Todo = require("../todo_model");

router.post("/", function (req, res) {
  User.findOne({username: req.body.username }, (err, data) => {
    var todo = {
      userId: data._id,
      title: req.body.title,
      status: req.body.status,
    };
    Todo.create(todo, (err, todoList) => {
      if (err) console.log("no todo list");
      res.send(todoList);
    });
  });
});

router.get("/:userId",(req,res)=>
{
    Todo.find({"userId": req.params.userId},(err,data)=>{
        if(err) console.log("no todo list for this user")
        res.send(data)
    })
})

router.delete("/:userId",(req,res)=>
{
    Todo.deleteOne({"userId": req.params.userId},(err,data)=>{
        if(err) console.log("not found")
        res.send(data)
    })
})

router.patch("/:userId",(req,res)=>
{
    Todo.updateOne({"userId": req.params.userId},{$set: {"title": req.body.title}},(err,data)=>{
        if(err) console.log("not found")
        Todo.findOne({"userId": req.params.userId},(err, todo)=>{
            res.send("Todo after edit: "+ todo)
        })
    })
})



module.exports = router;
