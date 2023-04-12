import { Box, Button, Flex, Heading, useToast } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CompProductCard from './Products/CompProductCard'
import WishListCard from './WishListCard'
import { useLocation, useNavigate } from 'react-router-dom'

const Wishlist = () => {

  const {wishlist} = useSelector(store=>store.auth.user)
  const {user} = useSelector(store=>store.auth)
  const location = useLocation()
  const toast = useToast();
  const navigate = useNavigate("/");
  console.log("wishlist",wishlist)
  function goBack() {
		window.history.back();
	  }
  if(wishlist.length===0){
    return (
      <>
      <Flex mt={"50vh"} ml={"25vw"} >
          <Heading position={'absolute'} textAlign={"center"}>
            Wishlist is empty...!
          </Heading>
             <Button mt="5rem" onClick={()=>goBack()}>Go Back To Home </Button>
      </Flex>
      </>
    )
  }
  return (
    <Box p={"3rem"}>

      <Flex gap={"1rem"}>
             {
             wishlist.map(ele=>(
              <WishListCard 
              key={ele.id}
              product={ele}
              mprice={ele.mPrice}
              colors={ele.color_options}
              size={ele.size}
              name={ele.brand_name}
              src={ele.image_url}
              rating={ele.avgRating}
              userRated={ele.userRated}
              price={ele.prices[0].price}
              tags={ele.tags}
              wishlist={ele.wishlistCount}
              />
             ))
             }
      </Flex>
          
    </Box>
  )
}

export default Wishlist