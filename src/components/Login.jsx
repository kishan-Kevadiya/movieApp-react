import { Container,Input,Heading,VStack,Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Login = () => {
  return <Container maxW={'container.xl'} h={'80vh'} p={'16'}>

<form>

<VStack alignItem={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'} >
    <Heading>Welcome Back😃</Heading>
    <Input placeholder={'Enter E-mail...'}  type={'email'} required focusBorderColor={'purple.500'} />
    <Input placeholder={'Password...'}  type={'password'} required focusBorderColor={'purple.500'} />

    <Button variant={'link'} alignSelf ={'flex-end'}>
        <Link to='/forgotpasword'>Forgot Password.?</Link>
    </Button>

    <Button colorScheme='purple' type='submit'>Log-in</Button>
    <Text textAlign={'right'}>New User.?{' '}
    <Button variant={'link'} colorScheme='purple'>
        <Link to='/signup'> Sign-up</Link>
    </Button></Text>


</VStack>
</form>

  </Container> 
}

export default Login