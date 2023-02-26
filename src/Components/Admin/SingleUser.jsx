import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const SingleUser = ({ item }) => {
  let fullname = `${item.firstname}${item.lastname}`;
  console.log(item);
  return (
    <div>
      <Stack >
      <Flex
        boxShadow='rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
        w="350px"
        borderRadius={5}
        backgroundColor={"gray.300"}
        justifyContent={"center"}
        alignItems={"center"}
        m="auto"
        gap="2rem"
        p="1rem"
      >
        

        <Avatar name={fullname}>
          <AvatarBadge boxSize="1.25em" bg={item.isAuth?"green.400":"red.400"} />
        </Avatar>
        <Box>
          <Text fontWeight={"600"} fontSize={"2xl"}>{item.firstname}{" "}{item.lastname} </Text> 
          <Text>{item.email}</Text>
        </Box>

      </Flex>
          </Stack>
    </div>
  );
};

export default SingleUser;

export const OnLine = () => {
//   return <Box h="10px" w="10px" backgroundColor=></Box>;
};
export const OffLine = () => {
  return <Box h="10px" w="10px" backgroundColor={"red.400"}></Box>;
};
