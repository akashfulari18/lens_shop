import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart , AiFillStar} from 'react-icons/ai'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToWishlist } from '../../store/Auth/auth.actions'

const CompProductCard = ({src , rating , userRated , price , name ,size,tags , colors ,mprice ,wishlist ,product , id}) => {

 
  const [iswish , setIsWish]=useState(false)
  const {user} = useSelector(store=>store.auth)
  const navigate = useNavigate();
 const dispatch = useDispatch()
 console.log(product.id)
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
    navigate(`/all_computer_glasses/${product.id}`)
  }
  return (
    < >
    <Box onClick={()=>veiwPage()} position="relative" border="0.1rem solid" borderColor="gray.300" borderRadius="3%" p="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} w={{base:"90%",sm:"80%",md:"45%",lg:"30%"}} m="auto">
        <Image m="auto" width="80%" src={src} alt='image'/>
        <Box  position="absolute" top="0.5rem" right="0.5rem" onClick={()=>{dispatch(addProductToWishlist(user,product))}} >
        <AiOutlineHeart  color={iswish?"red":"black"} size="2rem"/>
        </Box>
        <Box p="0.4rem">
          <Flex justifyContent="space-between" alignItems="center" >
          <Flex w="40%" borderRadius="2rem" alignItems="center" gap="0.1rem"  p="0px 0.2rem" bgColor="#eeeef5">
          <Text m={"auto"}>{rating
        //   ?rating:(Math.random() * (5 -1) +1).toFixed(1)
          }</Text>
          <AiFillStar size="1rem" color='green'/>
          <Text m={"auto"}>{userRated?userRated:Math.floor(Math.random()*(999)+1)} </Text>
          </Flex>
          <Flex justifyContent="flex-end">
          {colors.map((ele,index)=> index<3?<Box key={index}  bgColor={ele.color} w="1.5rem" h="1.5rem"  borderRadius="50%"></Box>:<Box></Box>)}
          <Box mt="-0.3rem">+
          {colors.length>3?colors.length-3:""}
          </Box>
          </Flex>
          </Flex>
          <Text mt="1rem" fontWeight="bold" color="#000042">{name} </Text>
          <Text mt="1rem" fontWeight="bold" color="#000042">Wishlist Count: {wishlist} </Text>
          <Text mt="1rem" fontWeight="light" color="#000042">Size : {size} . {tags}</Text>
          <Text mt="1rem" fontWeight="bold" color="#000042">₹{price} 
          {/* <span style={{fontSize:"14px" , fontWeight:"lighter" , textDecoration:"line-through"}}>₹{mprice}</span> */}
          </Text>
          
        </Box>
    </Box>
    </>
  )
}

export default CompProductCard