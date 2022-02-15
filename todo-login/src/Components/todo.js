import React, { useState } from "react";
import "./todo.css";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Todo() {
  const [input, setInput] = useState({ task: "", class: "unchecked" });
  const [tasks, setTasks] = useState([]);

  const add = () => {
    if(input.task!== ""){
    setTasks((tasks) => [...tasks, input]);
    setInput({ ...input, task: "" });
    }
  };

  const deleteTask = (index) => {
    var arr = [...tasks];
    arr.splice(index, 1);
    setTasks(arr);
  };
  const change = (event) => {
    setInput({ ...input, task: event.target.value });
  };
  const check = (index) => {
    if (tasks[index].class === "checked") {
      tasks[index].class = "unchecked";
      setTasks([...tasks]);
    } else {
      tasks[index].class = "checked";
      setTasks([...tasks]);
    }
  };

  return (
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          onChange={change}
          value={input.task}
        />
        <span className="addBtn" onClick={add}>
          Add
        </span>
      </div>

      {tasks.map((item, index) => (
        <List sx={{margin: 0, padding: 0}}>
          <ListItem
            key={index}
            className={item.class}
            secondaryAction={
              <IconButton className="close" onClick={() => deleteTask(index)}>
                x
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton onClick={() => check(index)} dense>
              <ListItemText primary={item.task} />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </>
  );
}
