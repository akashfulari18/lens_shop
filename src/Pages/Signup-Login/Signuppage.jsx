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

import { CloseIcon } from "@chakra-ui/icons";
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// export default function SignupCard() {
//   const [Password, setPassword] = useState("");
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setemail] = useState("");
//   const [contact, setContact] = useState("");

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
//           firstname,
//           lastname,
//           email,
//           Password,
//           contact,
//           isAuth: false,
//           cart: [],
//           wishlist: [],
//         }),
//       });
//       let data = await res.json();
//       console.log("data", data);
//       setload(false);
//       alert("Signup Successfull!");
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", Password);
//       navigate("/login");
//     } catch (error) {
//       setload(false);
//       console.log(error);
//     }

//     setFirstname("");
//     setLastname("");
//     setemail("");
//     setPassword("");
//     setContact("");
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
//                     Enter First Name
//                   </FormLabel>
//                   <Input
//                     width={"370px"}
//                     value={firstname}
//                     onChange={(e) => setFirstname(e.target.value)}
//                     type="text"
//                   />
//                 </Flex>
//               </FormControl>
//             </Box>

//             <FormControl id="lastName" isRequired>
//               <Flex>
//                 <FormLabel color={"green"} fontSize={"md"}>
//                   Enter Last Name
//                 </FormLabel>
//                 <Input
//                   width={"370px"}
//                   value={lastname}
//                   onChange={(e) => setLastname(e.target.value)}
//                   type="text"
//                 />
//               </Flex>
//             </FormControl>

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

//               <Flex>
//                 <FormLabel color={"green"}>Enter Contact</FormLabel>
//                 <Input
//                   width={"340px"}
//                   value={contact}
//                   onChange={(e) => setContact(e.target.value)}
//                   type="string"
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

// function ToastExample() {
//   const toast = useToast();
//   return (
//     <Button
//       onClick={() =>
//         toast({
//           title: "Account created.",
//           description: "We've created your account for you.",
//           status: "success",
//           duration: 9000,
//           isClosable: true,
//         })
//       }
//     >
//       Show Toast
//     </Button>
//   );
// }

export const SignupCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [Password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setContact] = useState("");

  const [load, setload] = useState(false);
  const navigate = useNavigate();

  const toast = useToast();

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
      console.log("data",data);
      setload(false);
      alert("Signup Successfull!");
      // <ToastExample />;
      localStorage.setItem("email", email);
      localStorage.setItem("password", Password);
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
    <>
      {/* <Box >
        <Heading>Create your account</Heading>

        <FormControl isRequired>
          <FormLabel>Enter First Name</FormLabel>
          <Input
            ref={initialRef}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            placeholder="First name"
          />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
          />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="string"
          />
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
      </Box> */}

      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Box
          // border={"1px solid red"}
          w={"50%"}
          m={"auto"}
          borderRadius={"10px"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        >
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"md"} position={"relative"}>
              <Heading fontSize={"xl"}>Create an Account</Heading>
              <FormControl isRequired>
                {/* <FormLabel>Enter First Name</FormLabel> */}
                <Input
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  type="text"
                  placeholder="First Name*"
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                {/* <FormLabel>Last name</FormLabel> */}
                <Input
                  placeholder="Last Name*"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                {/* <FormLabel>Contact</FormLabel> */}
                <Input
                  placeholder="Mobile*"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="string"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                {/* <FormLabel>Enter Email ID</FormLabel> */}
                <Input
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                {/* <FormLabel>Password</FormLabel> */}
                <Input
                  placeholder="Password*"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormControl>

              <Text fontSize={"xs"} textDecor={"underline"}>
                Got a Referral Code? ( Optional )
              </Text>

              <Text fontSize={"xs"}>☑️ Get updates on Whatsapp</Text>

              <Text fontSize={"xs"}>
                By creating this account, you agree to our{" "}
                <Link textDecoration={"underline"}>Privacy Policy</Link>
              </Text>

              <Stack spacing={10} pt={2}>
                {load ? (
                  <Button
                    isLoading
                    // colorScheme="black"
                    bg={"gray"}
                    colorScheme="teal"
                    borderRadius={"100px"}
                    variant="solid"
                  >
                    Email
                  </Button>
                ) : (
                  <Button
                    onClick={postdata}
                    loadingText="Submitting"
                    size="md"
                    bg={"gray.300"}
                    color={"black"}
                    borderRadius={"100px"}
                    _hover={{
                      bg: "gray.400",
                    }}
                  >
                    Create an Account
                  </Button>
                )}
              </Stack>

              <Stack>
                <Text align={"center"} fontSize={"sm"}>
                  Already a user? <Link href="/login">Sign In</Link>
                </Text>
              </Stack>

              <Box position={"absolute"} top={"-8"} right={"-130"}>
                <Link href={"/"}>
                  <CloseIcon boxSize={["10px", "15px"]} />
                </Link>
              </Box>
            </Stack>
          </Flex>
        </Box>

        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://media.fashionnetwork.com/m/bc4e/3c81/2c08/74df/90fe/6bdf/1ae6/2c9e/a508/3132/3132.jpeg"
            }
          />
        </Flex>
      </Stack>
    </>
  );
};
