// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   Link,
//   Image,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function SignupCard() {
//   const [Password, setPassword] = useState("");
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [load, setload] = useState(false);
//   const navigate = useNavigate();

//   const postdata = async () => {
//     setload(true);
//     try {
//       let res = await fetch(`https://lesn-shop-server.onrender.com/users`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           Password,
//         }),
//       });
//       let data = await res.json();
//       console.log(data);
//       setload(false);
//       alert("Signup Successfull!");
//       navigate("/login");
//     } catch (error) {
//       setload(false);
//       console.log(error);
//     }

//     setname("");
//     setemail("");
//     setPassword("");
//   };

//   return (
//     <Flex
//       bg={"rgb(247,250,252)"}
//       justifyContent={"center"}
//       alignItems={"center"}
//     >
//       <Stack spacing={6} mx={"auto"} px={6} className={"signup_main"}>
//         <Stack align={"center"}>
//           <Heading
//             mt={"-30px"}
//             fontSize={"xl"}
//             fontWeight={"700"}
//             textAlign={"center"}
//           >
//             Enter details to login/sign-up
//           </Heading>
//         </Stack>

//         <Box>
//           <Stack spacing={4} mt={"-10px"}>
//             <Box>
//               <FormControl id="firstName" isRequired>
//                 <Flex>
//                   <FormLabel color={"green"} fontSize={"md"}>
//                     Enter Name
//                   </FormLabel>
//                   <Input
//                     width={"370px"}
//                     value={name}
//                     onChange={(e) => setname(e.target.value)}
//                     type="text"
//                   />
//                 </Flex>
//               </FormControl>
//             </Box>

//             <FormControl id="email" isRequired>
//               <Flex>
//                 <FormLabel color={"green"}>Enter Email ID</FormLabel>
//                 <Input
//                   width={"355px"}
//                   value={email}
//                   onChange={(e) => setemail(e.target.value)}
//                   type="email"
//                 />
//               </Flex>
//             </FormControl>

//             <FormControl id="password" isRequired>
//               <Flex>
//                 <FormLabel color={"green"}>Enter Password</FormLabel>
//                 <Input
//                   width={"340px"}
//                   value={Password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                 />
//               </Flex>
//             </FormControl>

//             <Stack spacing={10} pt={2}>
//               {load ? (
//                 <Button isLoading colorScheme="green" variant="solid">
//                   Email
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={postdata}
//                   loadingText="Submitting"
//                   size="md"
//                   bg={"green.600"}
//                   color={"white"}
//                   _hover={{
//                     bg: "green.700",
//                   }}
//                 >
//                   Sign up
//                 </Button>
//               )}
//             </Stack>
//             <Stack>
//               <Text align={"center"} fontSize={"sm"}>
//                 Already a user?{" "}
//                 <Link color={"green"} to="/login">
//                   Login
//                 </Link>
//               </Text>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupCard() {
  const [Password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setContact] = useState("");

  const [load, setload] = useState(false);
  const navigate = useNavigate();

  const postdata = async () => {
    setload(true);
    try {
      let res = await fetch(`https://lesn-shop-server.onrender.com/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          Password,
          contact,
          isAuth: false,
          cart: [],
          wishlist: [],
        }),
      });
      let data = await res.json();
      console.log(data);
      setload(false);
      alert("Signup Successfull!");
      navigate("/login");
    } catch (error) {
      setload(false);
      console.log(error);
    }

    setFirstname("");
    setLastname("");
    setemail("");
    setPassword("");
    setContact("");
  };

  return (
    <Flex
      bg={"rgb(247,250,252)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack spacing={6} mx={"auto"} px={6} className={"signup_main"}>
        <Stack align={"center"}>
          <Heading
            mt={"-30px"}
            fontSize={"xl"}
            fontWeight={"700"}
            textAlign={"center"}
          >
            Enter details to login/sign-up
          </Heading>
        </Stack>

        <Box>
          <Stack spacing={4} mt={"-10px"}>
            <Box>
              <FormControl id="firstName" isRequired>
                <Flex>
                  <FormLabel color={"green"} fontSize={"md"}>
                    Enter First Name
                  </FormLabel>
                  <Input
                    width={"370px"}
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                  />
                </Flex>
              </FormControl>
            </Box>

            <FormControl id="lastName" isRequired>
              <Flex>
                <FormLabel color={"green"} fontSize={"md"}>
                  Enter Last Name
                </FormLabel>
                <Input
                  width={"370px"}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                />
              </Flex>
            </FormControl>

            <FormControl id="email" isRequired>
              <Flex>
                <FormLabel color={"green"}>Enter Email ID</FormLabel>
                <Input
                  width={"355px"}
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                />
              </Flex>
            </FormControl>

            <FormControl id="password" isRequired>
              <Flex>
                <FormLabel color={"green"}>Enter Password</FormLabel>
                <Input
                  width={"340px"}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </Flex>

              <Flex>
                <FormLabel color={"green"}>Enter Contact</FormLabel>
                <Input
                  width={"340px"}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="string"
                />
              </Flex>
            </FormControl>

            <Stack spacing={10} pt={2}>
              {load ? (
                <Button isLoading colorScheme="green" variant="solid">
                  Email
                </Button>
              ) : (
                <Button
                  onClick={postdata}
                  loadingText="Submitting"
                  size="md"
                  bg={"green.600"}
                  color={"white"}
                  _hover={{
                    bg: "green.700",
                  }}
                >
                  Sign up
                </Button>
              )}
            </Stack>
            <Stack>
              <Text align={"center"} fontSize={"sm"}>
                Already a user?{" "}
                <Link color={"green"} to="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
