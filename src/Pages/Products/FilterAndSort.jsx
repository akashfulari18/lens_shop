import { Box, Checkbox, CheckboxGroup, Select, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getComputerGlassData } from '../../store/Product/product.actions';
import { getCompProducts } from '../../store/App/app.actions';

const FilterAndSort = () => {
     const { compGlassesData, isLoading } = useSelector((store) => store.app);
  const { compGlassData } = useSelector((store) => store.product);
  const [searchParams ,setSearchParams] =useSearchParams()
  const initFilterValues =searchParams.getAll('filter')
  const initOrder =searchParams.getAll('_order')
  const initSort =searchParams.getAll('_sort')
 
  const [filterValues,setFilterValues] = useState(initFilterValues || [])
  const [order,setOrder] = useState(initOrder || "desc")
  const [sort,setSort] = useState(initSort || "avgRating")
  const dispatch = useDispatch();

  const frame = compGlassesData.map((el) => el.frame_Size);
  const shape = compGlassesData.map((el) => el.frame_Shape);

  const newSet = new Set(frame);
  const newShape = new Set(shape);
  const frameT = []
  const ShapeT = []

  for(let el of newSet){
    frameT.push(el)
  }
  for(let el of newShape){
    ShapeT.push(el)
  }

  console.log("compGlassesData", filterValues);

  useEffect(() => {
    const getParam = {
      params :{
        frame_Size:searchParams.getAll('filter'),
        _sort:searchParams.get('_sort'),
        _order:searchParams.get('_order')
      }
    }
    // console.log("get",getParam)
    dispatch(getCompProducts());
    dispatch(getComputerGlassData(getParam));
  }, [dispatch,filterValues,setSearchParams,sort,order]);
 

  let loader = [1, 2, 3, 4, 5, 6];


  const handleFilterChange = (value)=>{
    setFilterValues(value)
}

// const handleSortProducts=()=>{
//     set
// }

useEffect(()=>{
  let params={}
  if(filterValues.length) params.filter = filterValues
 
  if(sort==="totalNoOfRatingsHTL"){
    params._sort = "totalNoOfRatings"
    params._order = "desc"
}else if(sort==="totalNoOfRatingsLTH"){
    params._sort = "totalNoOfRatings"
    params._order = "asc"
}else if(sort==="wishlistCountHTL"){
    params._sort = "wishlistCount"
    params._order = "desc"
}else if(sort==="wishlistCountLTH"){
  params._sort = "wishlistCount"
  params._order = "asc"
}else if(sort==="avgRatingHTL"){
  params._sort = "avgRating"
  params._order = "desc"
}else if(sort==="avgRatingLTH"){
params._sort = "avgRating"
params._order = "asc"
}        
  setSearchParams(params)
  // console.log(params)
},[filterValues,setSearchParams,sort,order])
  return (
    <Box >
         <Box w="100%" m={0} display={{base:"block",md:"block",lg:"block"}} position={"sticky"} top="10.5rem">
          <Box my="20px" h={"10rem"}>
            <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
              FRAME SIZE
            </Text>
            

            <CheckboxGroup colorScheme="blue" value={filterValues} onChange={handleFilterChange}>
          <Stack spacing={1} direction={["column"]} border={"0px solid black"} pb={1}  overflowY={"scroll"} >
            {frameT.map((el)=>(
                 <Checkbox value={el}>{el}</Checkbox>
            ))}
          
          </Stack>
        </CheckboxGroup>
        
           
          </Box>
          <Text>Sort By</Text>
          <Select
            border="0px"
            borderTop="1px"
            borderRadius="0px"
            borderColor="gray.300"
            p="0px"
            onChange={(e)=>setSort(e.target.value)}
            placeholder="Select sort By"
            >
             
           <option value={"wishlistCountHTL"}> Wishlist Count High to Low </option>
              <option value={"wishlistCountLTH"}> Wishlist Count Low to High </option>
              {/* <option value={"totalNoOfRatingsHTL"}>Total No of Rating High to Low</option>
              <option value={"totalNoOfRatingsLTH"}>Total No of Rating Count Low to High</option> */}
              <option value={"avgRatingHTL"}>Total No of Rating High to Low</option>
              <option value={"avgRatingLTH"}>Total No of Rating Low to High</option>
          </Select>
          
         
          
        </Box>
    </Box>
  )
}

export default FilterAndSort