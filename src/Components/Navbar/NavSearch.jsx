import { Box, Flex, Image, Input, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getComputerGlassData,
  getKidsData,
} from "../../store/Product/product.actions";
import { Link, useLocation, useParams } from "react-router-dom";
import { useThrottle } from "../../hooks/useThrottle";

const NavSearch = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  // console.log(location)

  const [suggestions, setSuggestion] = useState([]);
  //console.log(isOpen)
  const throttledText = useThrottle(query, 500);

  console.log("thtext", throttledText);
  const { compGlassData } = useSelector((store) => store.product);
  const { kids } = useSelector((store) => store.product);
  const allData = [...compGlassData, ...kids];
  console.log("allData", allData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComputerGlassData());
    dispatch(getKidsData());
  }, [dispatch]);

  useEffect(() => {
    if (throttledText === "") {
      setSuggestion([]);
    } else if (location.pathname === "/") {
      let newSuggestions = allData?.filter((item) =>
        item.brand_name
          .split("")
          .join("")
          .trim()
          .toLowerCase()
          .includes(throttledText)
          ? true
          : false
        // console.log(item.brand_name)
      );
      setSuggestion(newSuggestions);
    }
  }, [throttledText]);
  console.log("suggestions", suggestions);

  return (
    <div>
      <Box
        position="relative"
        h="100%"
        w="100%"
        borderRadius="5px"
        borderColor="#000042"
        bg="#FFFFFF"
      >
        <Input
          color="grey"
        //   ml="2%"
          mt="0.3%"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
            onOpen();
          }}
          placeholder="What are you looking for"
        ></Input>
        {suggestions.length > 0 && isOpen && (
          <Box
            border="0px solid red"
            position={"absolute"}
            // left={["1%", "0%", "-42%", "-42%"]}
            // right={"15%"}
            zIndex="100"
            backgroundColor="white"
            boxShadow={"xl"}
            overflowY="scroll"
            height={"350px"}
            width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
            borderBottom={"4px solid #BB1679"}
            borderRadius={"lg"}
          >
            {suggestions?.map((el, i) => (
              <Link to={`/${el.category}/${el.id}`}>
                <Flex justifyContent={"space-between"} gap={"1rem"} p={"0 3rem"}>

                <Text
                textAlign={"center"}
                cursor={"pointer"}
                key={el.id}
                pt={1}
                onClick={() => {
                    onClose();
                    setQuery("");
                }}
                >
                  {el.brand_name}
                </Text>
                <Image src={el.image_url} h={"2rem"}/>
                    </Flex>
              </Link>
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default NavSearch;
