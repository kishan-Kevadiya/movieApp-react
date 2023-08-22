import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const HeadingOp = {
  pos:'absolute',
  left:'50%',
  top:'50%',  
  transform:'translate(-50%,-50%)',
  textTransform:'uppperCase',
  p:'4',
  size: '4xl'
};

const Home = () => {
  return (
    <Box>
<MyCarousel />

<Container maxW={'container.xl'} minH={'100vh'} >
<Heading textTransform={'upperCase'} py='2' w={'fit-content'} borderBottom={'3px solid'} m={'auto'}>
services
</Heading>

<Stack h='full'  p={'4'} alignItems={'center'} direction={['column', 'row']} >
  <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />

<Text fontFamily={'cursive'} letterSpacing={'widset'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit error provident vero. Maxime provident eaque esse aspernatur ad tempore quaerat ex numquam! Sequi amet doloribus qui obcaecati mollitia maxime quidem eos quae blanditiis dolorem, repellat aspernatur repudiandae. Ipsum optio sunt temporibus eaque id impedit itaque quis ea rem, inventore repellat ipsam, placeat verores! Quisquam sapiente ratione labore iusto nostrum cumque illo. Earum in repudiandae beatae voluptate id perferendis, labore amet facere quas.
</Text>
</Stack>


</Container>  

    </Box>
  )
}


const MyCarousel = () => {
   return <Carousel autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false} showThumbs={false}>

        <Box w={'full'} h={'100vh'}>
           <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
           <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOp}>
            Watch The Future
           </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
           <Image src={img2}   h="full" w={'full'} objectFit={'cover'}/>
           <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOp}>
            Future Is Gaming
           </Heading> 
        </Box>
        <Box w={'full'} h={'100vh'}>
           <Image src={img3}   h="full" w={'full'} objectFit={'cover'}/>
           <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOp}>
            Gaming Must Be Crazy
           </Heading> 
        </Box>
        <Box w={'full'} h={'100vh'}>
           <Image src={img4}   h="full" w={'full'} objectFit={'cover'}/>
           <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOp}>
            Night Can Do Anything
           </Heading> 
        </Box>

    </Carousel>
}

export default Home