import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CompProductCard from './Products/CompProductCard'
import WishListCard from './WishListCard'

const Wishlist = () => {

  const {wishlist} = useSelector(store=>store.auth.user)
  const {user} = useSelector(store=>store.auth)

  console.log("wishlist",wishlist)
  return (
    <Box>

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