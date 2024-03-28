import { Box, Text, Input, FormLabel, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Auth/actions";
import { Link, useNavigate } from "react-router-dom";
let initialData = {
  email:"",
  password:""
}

export const Login = () => {
  const [state, setState] = useState(true);
  const [data, setData] = useState(initialData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleChange(e){
    const {name,value} = e.target;
    setData((pre)=>{
      return {...pre, [name]: value}
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login(data,navigate))
    setData(initialData)
  }

  return (
    <>
      {state && (
        <Box className="login" boxShadow="md" p="25px" borderRadius="10px">
          <Heading mb="30px" color="gold">
            Log in
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormLabel>Email address</FormLabel>
            <Input type="text" placeholder="email" value={data.email} name="email" required w="300px" onChange={handleChange} />
            <br />
            <FormLabel>Password</FormLabel>
            <Input type="text" placeholder="password" value={data.password} name="password" required w="300px" onChange={handleChange} />
            <br />
            <button 
              style={{
                padding: "10px 50px",
                margin: "50px 0 20px 0px",
                backgroundColor: "gold",
                color: "white",
              }}
              // onClick={handleLogin}
            >
              login
            </button>
          </form>
          <Text cursor='pointer' onClick={() => setState(!state)}>Register here</Text>
        </Box>
      )}
      {!state && (
        <Box className="login" boxShadow="md" p="25px" borderRadius="10px">
          <Heading mb="30px" color="gold">
            Register
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="name" required w="300px" />
            <br />
            <FormLabel>Mobile</FormLabel>
            <Input type="number" placeholder="email" required w="300px" />
            <br />
            <FormLabel>Email address</FormLabel>
            <Input type="text" placeholder="email" required w="300px" />
            <br />
            <FormLabel>Password</FormLabel>
            <Input type="text" placeholder="password" required w="300px" />
            <br />
            <button
              style={{
                padding: "10px 50px",
                margin: "50px 0 20px 0px",
                backgroundColor: "gold",
                color: "white",
              }}
            >
              Register
            </button>
          </form>
          <Text cursor='pointer' onClick={() => setState(!state)}>Login here</Text>
        </Box>
      )}
    </>
  );
};

// export const Register = () => {
//     return (
//     <Box>

//     </Box>
//     )
// }
