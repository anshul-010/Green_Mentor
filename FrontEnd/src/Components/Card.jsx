import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { deleteNote } from "../Redux/Notes/action";
import { useSelector } from "react-redux";

export const Card = ({ data,setState,state }) => {

    const token = useSelector((store) => store.authReducer.token);

    function handleDelete(id){
        deleteNote(id,token) 
        setState(!state)   
    }

  return (
    <Box  boxShadow='base' borderRadius='10px'>
    <Box boxShadow='base' borderRadius='10px' display="flex" position="relative" p='20px' w='200px'>
      <Box w='170px'>
        <Text>{data.title}</Text>
        <Text>{data.body}</Text>
      </Box>
      <Box
        h="10px"
        w="10px"
        backgroundColor={data.status?"#50ec31":"#ec3131"}
        borderRadius="50%"
        position="absolute"
        right='5px'
        top='5px'
      ></Box>
    </Box>
      <Button colorScheme='red' variant='ghost' onClick={()=>handleDelete(data._id)}>
        Remove
    </Button>
    </Box>

  );
};
