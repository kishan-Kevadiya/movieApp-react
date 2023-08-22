import { Container,Input,Heading,VStack,Button, Text, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Signup = () => {
  return <Container maxW={'container.xl'} h={['115vh','105vh']} p={['3','8']}>

<form>

<VStack alignItem={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'} >
    <Heading textAlign={'center'}>Create An Account 🕉</Heading>
    <Avatar alignSelf={'center'} boxSize={'32'} />

    <Input placeholder={'Enter Your Name...'}  type={'text'} required focusBorderColor={'purple.500'} />
    <Input placeholder={'Enter E-mail Adress...'}  type={'email'} required focusBorderColor={'purple.500'} />
    <Input placeholder={'Password here...'}  type={'password'} required focusBorderColor={'purple.500'} />

    {/* <Button variant={'link'} alignSelf ={'flex-end'}>
        <Link to='/forgotpasword'>Forgot Password.?</Link>
    </Button> */}

    <Button colorScheme='purple' type='submit'>Sign-Up</Button>
    <Text textAlign={'right'}>Already have an Account?{' '}
    <Button variant={'link'} colorScheme='purple'>
        <Link to='/login'>Log-in</Link>
    </Button></Text>


</VStack>
</form>

  </Container> 
}

export default Signup