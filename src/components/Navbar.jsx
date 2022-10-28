import { Box, Heading,Input,Flex, Text, Button, InputGroup, InputRightAddon} from '@chakra-ui/react'
import {Search2Icon} from "@chakra-ui/icons"
import React from 'react'
import Login from './Login'
import Register from './Register'


function Navbar() {
  return (
    <Box bg="primary" >
        <Box w="85%" border="1px solid black" m="auto" p="10px">
        <Flex gap="5%" align="center">
            <Heading fontFamily="cursive"><span style={{color:'red'}}>B</span>logging<span style={{color:"yellow"}}>S</span>logging </Heading>
            <InputGroup>
            <Input type="Search" placeholder='Search Blogs' color="baseColor" bg="secondary" borderColor="baseColor"/>
            <InputRightAddon children=<Search2Icon/> />
            </InputGroup>
            <Flex gap="10%" align="center">
            <Login/>
            <Register/>
            </Flex>
        </Flex>
        </Box>
        
    </Box>
  )
}

export default Navbar