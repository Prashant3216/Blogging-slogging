import React from 'react'
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
    Flex,
    Select

  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

  import {EmailIcon, LockIcon} from "@chakra-ui/icons"

function Register() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button bg="baseColor" color="secondary" ref={btnRef} _hover={{color:"primary", bg:"secondary"}} onClick={onOpen}>
          Register
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xl"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create an account here </DrawerHeader>
  
            <DrawerBody >
              <form>
              <Flex gap="5%">
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                 <Input type='text' placeholder='First Name' />
              </FormControl>
              <FormControl >
                <FormLabel>Last Name</FormLabel>
                 <Input type='text' placeholder='Last Name' />
              </FormControl>
              </Flex>
              <Flex gap="5%" align="normal">
              <FormControl isRequired>
                <FormLabel>age</FormLabel>
                 <Input type='Number' placeholder='Age' />
              </FormControl>
              <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <Select placeholder='Gender'>
                <option value='option1'>male</option>
                <option value='option2'>female</option>
                <option value='option3'>other</option>
                <option value='option3'>opt out</option>
              </Select>
              </FormControl>
              </Flex>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <InputGroup>
                <InputLeftAddon children=<EmailIcon/> />
                 <Input type='email' placeholder='Email Address' />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Create Password</FormLabel>
                <InputGroup>
                <InputLeftAddon children=<LockIcon/> />
                 <Input type='password' placeholder='Create Password' />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Re-enter Password</FormLabel>
                <InputGroup>
                <InputLeftAddon children=<LockIcon/> />
                 <Input type='password' placeholder='Re-enter Password' />
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

export default Register