import { Container,VStack,HStack,Input,Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return <Container maxW={'container.xl'} h={'66.2vh'} p={'16'}>
<VStack color={'purple.500'} h={'40vh'} justifyContent={'center'}>
<AiOutlineCloudUpload  size={'10vmax'} />


<form>

<HStack>
    <Input reqired type={'file'}     css={{
       '&::file-selector-button':{
            border:'1px solid gray',
            width:' calc(100% + 36px)',
            height:'100%',
            marginLeft:'-18px',
            color:'purple',
            backgroundColor:'white',
            cursor:'pointer'
        },
    }} />
        
    <Button colorScheme={'purple'} type={'submit'}>Upload</Button>
</HStack>

</form>


</VStack>
  </Container>
}

export default Upload