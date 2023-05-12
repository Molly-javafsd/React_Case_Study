import React, { useState } from "react";
import {Typography, TextField, Button, Box, Container} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
export default function LoginComponent() {
const [login, setLogin] = useState({

    username:'',
   password:'',

  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setLogin((prevData) => ({
        ...prevData,
        [name]:value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

  }



  return (
    <>
     <Box py={3} bgcolor='grey.200'>
        <Container maxWidth='md'>
            <Typography variant='h6' align='centre' gutterBottom>
                Login Here
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                id='username'
                name='username'
                label='Enter username'
                variant='outlined'
                margin='normal'
                fullWidth
                required
                value={login.username}
                onChange={handleChange}
                />
                 <TextField
                id='password'
                name='password'
                label='Your password'
                variant='outlined'
                margin='normal'
                fullWidth
                required
                value={login.password}
                onChange={handleChange}
                />
               
                <Button variant="contained" endIcon={<SendIcon/>}>
                  Login
                </Button>
                </form>
                </Container></Box>
    </>
  )
}
