import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Select,
  Stack,
  Switch,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { TbArrowsUpDown } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import FrameType from "./FrameType";
import axios from "axios";
import LoadingState from "./LoadingState";
import TopNav from "../../Components/Navbar/TopNav";
import { useDispatch, useSelector } from "react-redux";
import { getKidsProducts } from "../../store/App/app.actions";
import KidsProductCard from "./KidsProductCard";
import FilterAndSort from "./FilterAndSort";
import { getKidsData } from "../../store/Product/product.actions";
import { useSearchParams } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";

const KidsGlasses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { kidsGlassesData, isLoading } = useSelector((store) => store.app);
  const { kids } = useSelector((store) => store.product);

  const [searchParams, setSearchParams] = useSearchParams();
  const initFilterValues = searchParams.getAll("filter");
  const initOrder = searchParams.getAll("_order");
  const initSort = searchParams.getAll("_sort");

  const [filterValues, setFilterValues] = useState(initFilterValues || []);
  const [order, setOrder] = useState(initOrder || "desc");
  const [sort, setSort] = useState(initSort || "avgRating");

  const dispatch = useDispatch();
  console.log("kidsGlassesData", kids);

  const frame = kidsGlassesData.map((el) => el.frame_Size);
  const shape = kidsGlassesData.map((el) => el.frame_Shape);

  const newSet = new Set(frame);
  const newShape = new Set(shape);
  const frameT = [];
  const ShapeT = [];
  for (let el of newSet) {
    frameT.push(el);
  }
  for (let el of newShape) {
    ShapeT.push(el);
  }

  console.log("framet", ShapeT);

  useEffect(() => {
    const getParam = {
      params: {
        frame_Shape: searchParams.getAll("filter"),
        _sort: searchParams.get("_sort"),
        _order: searchParams.get("_order"),
      },
    };

    dispatch(getKidsProducts());
    dispatch(getKidsData(getParam));
  }, [dispatch, filterValues, setSearchParams, sort, order]);
  // const [products , setProducts]=useState([])
  // const [isLoding , setIsLoding]=useState(false)
  const [filters, setfilters] = useState([]);
  // const [page , setPage]=useState(1)
  // const handleFilter =()=>{

  // }

  let loader = [1, 2, 3, 4, 5, 6];

  const handleSort = (e) => {
    dispatch(getCompProducts(e.target.value));
  };

  const handleFilterChange = (value) => {
    setFilterValues(value);
  };

  useEffect(() => {
    let params = {};
    if (filterValues.length) params.filter = filterValues;

    if (sort === "totalNoOfRatingsHTL") {
      params._sort = "totalNoOfRatings";
      params._order = "desc";
    } else if (sort === "totalNoOfRatingsLTH") {
      params._sort = "totalNoOfRatings";
      params._order = "asc";
    } else if (sort === "wishlistCountHTL") {
      params._sort = "wishlistCount";
      params._order = "desc";
    } else if (sort === "wishlistCountLTH") {
      params._sort = "wishlistCount";
      params._order = "asc";
    } else if (sort === "avgRatingHTL") {
      params._sort = "avgRating";
      params._order = "desc";
    } else if (sort === "avgRatingLTH") {
      params._sort = "avgRating";
      params._order = "asc";
    }
    setSearchParams(params);
    // console.log(params)
  }, [filterValues, setSearchParams, sort, order]);

  return (
    <>
      <TopNav />
      <Flex m="0" px="2%">
        {/* <Box w="20%" m={0}> */}
          <Box>
            <Box
              w="100%"
              m={0}
              display={{ base: "none", md: "block", lg: "block" }}
            >
              <Box my="20px" h={"10rem"}>
                <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                  FRAME SIZE
                </Text>

                <CheckboxGroup
                  colorScheme="blue"
                  value={filterValues}
                  onChange={handleFilterChange}
                >
                  <Stack
                    spacing={1}
                    direction={["column"]}
                    border={"0px solid black"}
                    pb={1}
                    overflowY={"scroll"}
                  >
                    {ShapeT.map((el) => (
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
                onChange={(e) => setSort(e.target.value)}
                placeholder="Select sort By"
              >
                <option value={"wishlistCountHTL"}>
                  {" "}
                  Wishlist Count High to Low{" "}
                </option>
                <option value={"wishlistCountLTH"}>
                  {" "}
                  Wishlist Count Low to High{" "}
                </option>

                <option value={"avgRatingHTL"}>
                  Total No of Rating High to Low
                </option>
                <option value={"avgRatingLTH"}>
                  Total No of Rating Low to High
                </option>
              </Select>
            </Box>
        </Box>
          {/* </Box> */}

        <Box
          overflow="scroll"
          w={{ base: "100%", md: "70%", lg: "80%" }}
          borderLeft="1px solid"
          borderColor="gray.300"
          m={0}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexWrap={"wrap"}
            p="5px"
            bg="#e2e8f0"
            border="1px"
            borderColor="gray.400"
          >
            <Text>ALL KIDS GLASSES</Text>
            
            <Flex>
              <Flex alignItems="center">
                <TbArrowsUpDown color="green" fontWeight="bold" />
                <Text fontWeight="bold" color="green">
                  SortBy
                </Text>
              </Flex>
              <Select
                onChange={handleSort}
                border="2px"
                borderRadius="3px"
                borderColor="black"
                ml="4px"
                p="0px"
              >
                <option value="">Select</option>
                <option value="desc">Price : low to high</option>
                <option value="asc">Price : high to low</option>
              </Select>
            </Flex>
          </Flex>
          <Text mt="0.5rem" textAlign="center">
            Showing {kids.length} Results
          </Text>
          {!isLoading ? (
            <Flex
              m="20px 10px"
              flexWrap={"wrap"}
              
              gap={6}
            >
              {kids.map((ele) => (
                <KidsProductCard
                  id={ele.id}
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
                  shape={ele.frame_Shape}
                  wishlistCount={ele.wishlistCount}
                />
              ))}
            </Flex>
          ) : (
            <Grid
              m="20px 10px"
              templateColumns="repeat(3, 1fr)"
              height="100vh"
              gap={6}
            >
              {loader.map((ele) => (
                <LoadingState key={ele} />
              ))}
            </Grid>
          )}
        </Box>
      </Flex>

      <Box
        backgroundColor={"white"}
        display={{ base: "block", md: "none", lg: "none" }}
        color={"black"}
        // border={"1px solid red"}
       borderTop={"1px solid black"}
        bottom={"0rem"}
        pos={"fixed"}
        w={"100%"}
       cursor={"pointer"}
      >
        <Flex onClick={onOpen} display={{ base: "block", md: "none", lg: "none" }} h={"4rem"} justifyContent={"center"} alignItems={"center"}   >
          <Text fontSize={"1.3rem"} textAlign={"center"} pt="1rem">Filters</Text>
        </Flex>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent>
           
            <DrawerBody>
          <CloseIcon onClick={onClose} zIndex={15} right={"0rem"}/>
          <Box>
            <Box
              w="100%"
              m={0}
              display={{ base: "block", md: "block", lg: "block" }}
            >
              <Box my="20px" h={"10rem"}>
                <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
                  FRAME SIZE
                </Text>

                <CheckboxGroup
                  colorScheme="blue"
                  value={filterValues}
                  onChange={handleFilterChange}
                >
                  <Stack
                    spacing={1}
                    direction={["column"]}
                    border={"0px solid black"}
                    pb={1}
                    overflowY={"scroll"}
                  >
                    {ShapeT.map((el) => (
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
                onChange={(e) => setSort(e.target.value)}
                placeholder="Select sort By"
              >
                <option value={"wishlistCountHTL"}>
                  {" "}
                  Wishlist Count High to Low{" "}
                </option>
                <option value={"wishlistCountLTH"}>
                  {" "}
                  Wishlist Count Low to High{" "}
                </option>

                <option value={"avgRatingHTL"}>
                  Total No of Rating High to Low
                </option>
                <option value={"avgRatingLTH"}>
                  Total No of Rating Low to High
                </option>
              </Select>
            </Box>
        </Box>
           
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default KidsGlasses;
