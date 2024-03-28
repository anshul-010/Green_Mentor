import { Box, Heading, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box
      w="90vw"
      maxW="1200px"
      m="auto"
      display="flex"
      justifyContent="space-between"
      h="90vh"
      maxH="800px"
    >
      <Box alignSelf="center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhY6NdHXrEXbYePxB1iJthSbWefYDQ5XzaVQ"
          borderRadius="15px"
        />
      </Box>
      <Box>
        <Heading
          fontSize="3xl"
          cursor="pointer"
          m="30px"
          p="15px"
          borderRadius="10px"
          boxShadow="base"
          _hover={{ boxShadow: "1px 1px 1px gold", color: "gold" }}
        >
          Welcome to Note Managment App
        </Heading>
        <Heading
          fontSize="3xl"
          cursor="pointer"
          m="30px"
          p="15px"
          borderRadius="10px"
          boxShadow="base"
          _hover={{ boxShadow: "1px 1px 1px gold", color: "gold" }}
        >
          Here You can Create Your Personal Notes
        </Heading>
        <Heading
          fontSize="3xl"
          cursor="pointer"
          m="30px"
          p="15px"
          borderRadius="10px"
          boxShadow="base"
          _hover={{ boxShadow: "1px 1px 1px gold", color: "gold" }}
        >
          Prioritize Your Notes
        </Heading>
        <Link to='/'><Button
          colorScheme="yellow"
          variant="link"
          mt="50px"
          border="none"
          outline="none"
        >
          Create Note
        </Button></Link>
      </Box>
      <Box alignSelf="center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhY6NdHXrEXbYePxB1iJthSbWefYDQ5XzaVQ"
          borderRadius="15px"
        />
      </Box>
    </Box>
  );
};
