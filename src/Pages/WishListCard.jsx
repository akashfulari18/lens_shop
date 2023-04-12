import React from 'react'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Button,
  
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../store/Auth/auth.actions';
const WishListCard = ({src , rating , userRated , price , name ,size,tags , colors ,mprice ,wishlist ,product , id}) => {
const {user} = useSelector(store=>store.auth)
    const dispatch = useDispatch()
    
  return (
    <div>
     <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>

        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
         
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '100%',
            
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${src})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            // height={230}
            width={"100%"}
            objectFit={'cover'}
            src={src}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
           {name}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {`₹${price}`}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
             Size:{size}
            </Text>
            <Text color={'gray.600'}>
              Rating: {rating}
            </Text>
          </Stack>
        </Stack>
            <Flex justifyContent="center">
          {colors.map((ele,index)=> index<3?<Box key={index}  bgColor={ele.color} w="1.5rem" h="1.5rem"  borderRadius="50%"></Box>:<Box></Box>)}
          <Box mt="-0.3rem">+
          {colors.length>3?colors.length-3:""}
          </Box>
          </Flex>
          <Button onClick={()=>{dispatch(removeFromWishlist(product,user))}}>
        Remove
          </Button>
      </Box>
    </Center>
    </div>
  )
}

export default WishListCard