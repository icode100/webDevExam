import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import '../index.css'
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Alert  from "@mui/material/Alert";
export default function Login() {

    const [state, changeState] = useState({
        email:"",
        password:"",
    });
    const HandleSubmit = async (event)=>{
        event.preventDefault();
        console.log("I am here");
  
    try {
      const response = await fetch("http://localhost:8000/portapi/v1/reglog/login", 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginState),
      }
    );
  
      if (response.error) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Login successful:", data);
      alert("success")
      setTimeout(() => navigate("/main"), 2000); // Redirect after 2 seconds
    } catch (error) {
        alert("Error occured")
    }
    }

    const HandleChange = (event)=>{
        changeState({
            ...state,
            [event.target.name]:event.target.value,
        })
    }
  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container className="login-container" display="flex" alignItems="center" maxWidth='xl'>
        <h1 marginLeft={100} marginTop={10} fontFamily="Arial">Welcome!</h1>
        <Box
          className="login-box"
          height={1000}
          width={500}
          my={4}
          display="flex"
          alignItems="center"
          marginLeft={60}
          marginTop={20}
          gap={4}
          p={2}
          sx={{
            bgcolor: "white",
            color: "black",
            height: "50vh",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "40px",
            border:"5px solid black"
          }}
        >
          <form onSubmit={HandleSubmit}>
            <Stack spacing={2} marginBottom={2}>
                <h3>Provide your credentials</h3>
                <TextField type = "email" id="outlined-basic" label="Email" variant="outlined" color="primary" name = "email" placeholder="enter your email"  onChange={HandleChange}/>
                <TextField type="password" id="outlined-basic" label="Password" variant="outlined" color="primary" name = "password" placeholder="enter your password"  onChange={HandleChange}/>
            </Stack>
            <Button variant="contained" color="success" type="submit">
                <LoginIcon/>
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}
