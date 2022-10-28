import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
    InputGroup,
    InputLeftAddon,

  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

  import {EmailIcon, UnlockIcon} from "@chakra-ui/icons"
  const initform={
    email:"",
    password:""
  }

function Login() {
    const [loginForm, setLoginForm]=useState(initform)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    let handleLoginFrom=(e)=>{
        let {name, value}=e.target
        setLoginForm({...loginForm, [name]:value})
    }
  
    return (
      <>
        <Text fontSize="lg" fontWeight="semibold" ref={btnRef} _hover={{color:"baseColor"}} onClick={onOpen}>
          Login
        </Text>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="lg"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Login here </DrawerHeader>
  
            <DrawerBody >
              <form onSubmit={()=>{}}>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <InputGroup>
                <InputLeftAddon children=<EmailIcon/> />
                 <Input type='email' name="email" placeholder='Email Address' onChange={handleLoginFrom}/>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <InputLeftAddon children=<UnlockIcon/> />
                 <Input type='password' name="password" placeholder='Password' onChange={handleLoginFrom}/>
                </InputGroup>
              </FormControl>
              <Input type="submit" bgColor="primary" _hover={{color:"secondary",bgColor:"baseColor"}} mt="20px"/>
              </form>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Login