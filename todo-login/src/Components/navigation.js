import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Todo from './todo';
import Login from  './login';


const pages = ['Login', 'To-do'];

const ResponsiveAppBar = () => {

  const [login, setLogin] = useState(false);
  const [todo, setTodo] = useState(false);

  const handleLogin=()=>{
    setTodo(false)
    setLogin(true)
  }
  const handleTodo=()=>{
    setLogin(false)
    setTodo(true)
  }

  const click=(page)=>{
    if(page === "Login")
    handleLogin()
    else
    handleTodo()
  }

  return (
    <>
    <AppBar position="static">
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, backgroundColor: "#a3005a" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 1, color: 'white', display: 'block' }}
                onClick={()=>click(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
    </AppBar>
    {login && <Login/>}
    {todo && <Todo/>}
    </>
  );
};
export default ResponsiveAppBar;
