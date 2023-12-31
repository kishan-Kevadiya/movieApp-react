import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure,VStack,HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {

 const {isOpen,onOpen,onClose} = useDisclosure();


  return (
   <>
   
   <Button pos={'fixed'} top={'4'} zIndex={'overlay'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}>
    < BiMenuAltLeft size={'20'}/>
   </Button>

   <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
   < DrawerOverlay/>
   <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader> 𝐊𝐈𝐒𝐇𝐀𝐍 𝐏𝐀𝐓𝐄𝐋⁰⁰⁷ </DrawerHeader>

    <DrawerBody>
        <VStack align={'flex-start'}>

            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/Videos'}>Videos</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/Errorfree'}>Free Video</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/upload'}>Upload Video</Link>
            </Button>

        </VStack>


    <HStack m={30} pos={'absolute'} bottom={50}  justifyContent={'space-evenly'}>

        <Button onClick={onClose} colorScheme='purple' m={2}> 
            <Link to={'/login'}>Log In</Link>
        </Button>
        <Button onClick={onClose} colorScheme='purple' variant={'outline'}> 
            <Link to={'/signup'}>Sign Up</Link>
        </Button>

    </HStack>



    </DrawerBody>


   </DrawerContent>

   </Drawer>
   
   </>
  )
}   

export default Header