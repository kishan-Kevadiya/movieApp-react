import React from 'react'
import { Box,Stack,VStack,Heading,HStack,Button,Input,Text } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  return (
   <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} px={'4'} w={'full'}>
                <Heading  size={'sm'} textTransform={'upperCase'} textAlign={['center','left']}>
                ❤Follow For More❤
                </Heading>
                <HStack 
                borderBottom={'2px solid white'}
                py='2'
                >
                    < Input 
                    placeholder='Enter email here...'
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor='none'
                    />
                    <Button
                    p={0}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack>

    <VStack w={'full'}
    borderLeft={['none','1px solid white']}
    borderRight={['none','1px solid white']} >
        <Heading textTransform={'uppercase'} textAlign={'center'} borderBottom={'1px solid purple'}>
        𝐊𝐈𝐒𝐇𝐀𝐍 𝐏𝐀𝐓𝐄𝐋⁰⁰⁷
        </Heading>
        <Text>© All Rights Are ®Reserved.</Text>
    </VStack>
    <VStack w={'full'}>
        <Heading size={'md'} borderBottom={'1px solid purple'}>
        SOCIAL MEADIA
        </Heading>
    <Button colorScheme={'white'} variant={'link'}>
<a href="https://youtube.com"  target={'blank'}>YouTube</a>
    </Button>
    <Button colorScheme={'white'} variant={'link'}>
<a href="https://instagram.com/kishan_patel_041" target={'blank'}>Instagram</a>
    </Button>
    <Button colorScheme={'white'} variant={'link'}>
<a href="https://github.com"  target={'blank'}>Git-Hub</a>
    </Button>   




    </VStack>

        </Stack>
   </Box>
  )
}

export default Footer