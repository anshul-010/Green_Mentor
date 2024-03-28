import { Box, Button, Center, Heading, Input, Select, useStatStyles } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {  addNote, getNotes } from "../Redux/Notes/action";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Components/Card";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'


  let initialData = {
    title:"",
    body:"",
    priority:""
  }

export const Notes = () => {
  const [noteData, setNoteData ] = useState([initialData]);
  const [state, setState] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();
  const token = useSelector((store) => store.authReducer.token);
  const Notes = useSelector((store) => store.noteReducer.notes);
  useEffect(() => {
    dispatch(getNotes(token));
  }, [state]);
  
  function handleChangeNote(e){
    const {name, value} = e.target;
    setNoteData((pre)=>{
        return {...pre, [name]: value};
    })
  }

  function handleAddNewNote(){
    onOpen()
}

function handleAdd(){
      console.log(noteData)
      setNoteData(initialData)
      dispatch(addNote(noteData,token))
      setState(!state)
      onClose()
  }

  return (
    <div>
      <Box>
        <Center>
          <Heading>Your Notes</Heading>
        </Center>
        <Button onClick={handleAddNewNote}>Create New Note</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Add New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type='text' placeholder="title" name='title'  m='10px' onChange={handleChangeNote} />
            <br />
            <Input type='text' placeholder="body"  name='body'  m='10px' onChange={handleChangeNote}/>
            <br />
            <Select name='priority' m='10px' onChange={handleChangeNote}>
                <option value="">Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </Select>
            <Center><Button mt='30px' onClick={handleAdd}>Add</Button></Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      </Box>
      <Box
        boxShadow='md'
        borderRadius='15px'
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={10}
        // w='600px'
        mt='20px'
        p='20px'
        placeItems="center"
      >
        {Notes?.map((ele) => (
          <Card data={ele} key={ele._id} setState={setState} state={state} />
        ))}
      </Box>
    </div>
  );
};

