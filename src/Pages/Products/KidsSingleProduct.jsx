import { Box, Button, Flex, Grid, GridItem, Image, Select, Text} from '@chakra-ui/react'
import {AiOutlineHeart} from 'react-icons/ai'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import TopNav from '../../Components/Navbar/TopNav'

const KidsSingleProduct = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  
  const {id} = useParams()
//   const addToCart=()=>{
//     setData({...data , quntity:1})
  
//     fetch('https://easy-pink-bull-shoe.cyclic.app/Cart',{
//       method:"POST",
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then(res=>navigate("/cart"))
//     .catch(err=>navigate("/cart"))
//   }
const fetchSingleProduct=(id)=>{
    axios(`https://lesn-shop-server.onrender.com/all_kids_glasses?id=${id}`)
    .then(res=>setData(res.data[0]))
     .catch(err=>console.log(err))
  }
  useEffect(() => {
  fetchSingleProduct(id)
  }, [])
  return (
    <>
   <TopNav/>
    <Grid m={5} gap={5} justifyContent="space-around" templateColumns='repeat(3, 1fr)'>
        <GridItem borderRadius={10} p="80px 5px" border="1px solid"  borderColor="gray.300"><Image  src={data.image_url}/></GridItem>
        <GridItem borderRadius={10} p="80px 5px" border="1px solid"  borderColor="gray.300" ><Image src={data.hover_image_url}/></GridItem>
        <GridItem position="relative" p={5} colSpan={1} rowSpan={10} >
          {/* <Text color="gray.500">{data.name}</Text> */}
          <Text my="10px" fontWeight={'bold'} w="80%">{data.product_name}</Text>
          <Text my="10px" fontWeight={'bold'} color="gray.600">Size : {data.size}</Text>
          <Flex justifyContent="flex-end">
          {data.color_options?.map((ele,index)=> index<3?<Box key={index}  bgColor={ele.color} w="20px" h="20px" ml="4px" borderRadius="50%"></Box>:<Box></Box>)}
          {/* <Box mt="-3px">+
          {data.color_options?.length>3?data.color_options?.length-3:""}
          </Box> */}
          </Flex>
          <Text my="10px" fontWeight={'bold'} fontSize="x-large">₹{data.price}</Text>
          {/* <Button p={7} m="10px 20px" w="90%" color="white" bgColor="#00bac6" onClick={addToCart}>BUY</Button> */}
          <Button p={7} m="10px 20px" w="90%">TRY ON</Button>
          <Box position="absolute" top="5px" right="5px"><AiOutlineHeart size={40}/></Box>
          <Select
              border="0px"
              borderBottom="1px"
              borderRadius="0px"
              borderColor="gray.300"
              p="10px"
            >
              <option>Technical Information</option>
              <option>Price : low to high</option>
              <option>Price : high to low</option>
            </Select>
        <Select
              border="0px"
              borderBottom="1px"
              borderRadius="0px"
              borderColor="gray.300"
              p="10px"
            >
              <option>Visit Nearby Store</option>
              <option>Price : low to high</option>
              <option>Price : high to low</option>
            </Select>
        <Select
              border="0px"
              borderBottom="1px"
              borderRadius="0px"
              borderColor="gray.300"
              p="10px"
            >
              <option>Check Delivery Options</option>
              <option>Price : low to high</option>
              <option>Price : high to low</option>
            </Select>
        <Select
              border="0px"
              borderBottom="1px"
              borderRadius="0px"
              borderColor="gray.300"
              p="10px"
            >
              <option>Review(118)</option>
              <option>Price : low to high</option>
              <option>Price : high to low</option>
            </Select>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu1.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu2.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu3.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu5.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu6.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu7.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu8.jpg'/>
        </GridItem>
        <GridItem borderRadius={10} p="80px 5px" border="1px solid"  borderColor="gray.300" ><Image src='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-sky-blue-transparent-full-rim-wayfarer-lenskart-blu-lb-e14058-c3_18_nov_2022181550_22_nov_2022.jpg'/></GridItem>
        <GridItem borderRadius={10} p="80px 5px" border="1px solid"  borderColor="gray.300" ><Image src='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-sky-blue-transparent-full-rim-wayfarer-lenskart-blu-lb-e14058-c3_18_nov_2022181547_22_nov_2022.jpg'/></GridItem>
        <GridItem borderRadius={10} p="80px 5px" border="1px solid"  borderColor="gray.300" ><Image src='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-blu-lb-e14058-c3-eyeglasses_17_september_feamle_shot-_lk_blu3719.jpg'/></GridItem>
        <GridItem borderRadius={10} p="80px 5px" border="1px solid"  borderColor="gray.300" ><Image src='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-blu-lb-e14058-c3-eyeglasses_17_september_feamle_shot-_lk_blu3731.jpg'/></GridItem>
        <GridItem borderRadius={10} p="80px 5px" border="1px solid"  borderColor="gray.300" ><Image src='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-blu-lb-e14058-c3-eyeglasses_G_7090.jpg'/></GridItem>
        <GridItem borderRadius={10} p="80px 5px" border="1px solid"  borderColor="gray.300" ><Image src='https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-blu-lb-e14058-c3-eyeglasses_G_7091.jpg'/></GridItem>
    </Grid>
    </>
  )
}

export default KidsSingleProduct