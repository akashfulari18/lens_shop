import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PageNotFound = () => {
    
  return (
    <Flex h={"80vh"} justifyContent={"center"} alignItems="center">
      <Text fontSize="2rem" fontWeight={500} >404: <span style={{color:"red"}}>Page Not Found</span></Text>
    </Flex>
  );
};

export default PageNotFound;
