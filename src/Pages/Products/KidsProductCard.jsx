import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart , AiFillStar} from 'react-icons/ai'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const KidsProductCard = ({src , rating , userRated , price , name ,size,tags , colors,shape ,mprice , product ,wishlistCount ,id}) => {
  const [iswish , setIsWish]=useState(false)
  const navigate = useNavigate();
  // console.log(colors)
//   let colors
//   if(color!=false && color!=undefined){
//     console.log(color)
//     colors  = color.split(',');
//   }else{
//     colors=["black"]
//   }
  const handleWishList=()=>{
    // if(iswhish){
    //   console.log(product)
    //   axios.post('https://lenskart-clone.herokuapp.com/whishlist/1',{product})
    //   .then(res=>console.log(res))
    //   .catch(err=>console.log(err))
    // }
    setIsWish(!iswish)
  }
  const veiwPage=(e)=>{
    navigate(`/all_kids_glasses/${id}`)
  }
  return (
    < >
    <Box onClick={()=>veiwPage()} position="relative" border="0.1rem solid" borderColor="gray.300" borderRadius="3%" p="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} w={{base:"90%",sm:"80%",md:"45%",lg:"30%"}} m={"auto"}>
        <Image m="auto" width="80%" src={src} alt='image'/>
        <Box  position="absolute" top="5px" right="5px" onClick={handleWishList} >
        <AiOutlineHeart  color={iswish?"red":"black"} size="30px"/>
        </Box>
        <Box p="10px">
          <Flex justifyContent="space-between" alignItems="center">
          <Flex w="30%" borderRadius="20px" alignItems="center" gap="5px" p="0px 2px" bgColor="#eeeef5">
          <Text>{rating
        //   ?rating:(Math.random() * (5 -1) +1).toFixed(1)
          }</Text>
          <AiFillStar size="15px" color='green'/>
          <Text>{userRated?userRated:Math.floor(Math.random()*(999)+1)}</Text>
          </Flex>
          <Flex justifyContent="flex-end">
          {colors?.map((ele,index)=> index<3?<Box key={index}  bgColor={ele.color} w="20px" h="20px" ml="4px" borderRadius="50%"></Box>:<Box></Box>)}
          </Flex>
          </Flex>
          <Text mt="10px" fontWeight="bold" color="#000042">{name} </Text>
          <Text mt="10px" fontWeight="bold" color="#000042">Wishlist Count:{wishlistCount} </Text>
          <Text mt="10px" fontWeight="bold" color="#000042">Wishlist Count:{shape} </Text>
          <Text mt="10px" fontWeight="light" color="#000042">Size : {size} . {tags}</Text>
          <Text mt="10px" fontWeight="bold" color="#000042">₹{price} </Text>
          
        </Box>
    </Box>
    </>
  )
}

export default KidsProductCard