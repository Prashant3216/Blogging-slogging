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

  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

  import {EmailIcon, UnlockIcon} from "@chakra-ui/icons"

function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
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
              <form>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <InputGroup>
                <InputLeftAddon children=<EmailIcon/> />
                 <Input type='email' placeholder='Email Address' />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <InputLeftAddon children=<UnlockIcon/> />
                 <Input type='password' placeholder='Password' />
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