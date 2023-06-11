// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
// import { AuthContext } from "./AuthContext";

// export default function Loginpage() {
//   const [email, setemail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [load, setload] = useState(false);
//   const navigate = useNavigate();
//   const { isAuth, loginUser, logoutUser } = useContext(AuthContext);
//   if (isAuth) {
//     navigate("/");
//   }
//   const login = async () => {
//     setload(true);

//     try {
//       let res = await fetch(`https://lesn-shop-server.onrender.com/users`);
//       let data = await res.json();
//       console.log(data);
//       let Auth = false;
//       for (let i in data) {
//         if (data[i].email === email && data[i].Password === Password) {
//           Auth = true;
//           loginUser(data[i].name);
//           console.log(data[i].name);
//           break;
//         }
//       }
//       setload(false);
//       if (Auth == false) {
//         alert("Please enter right email or password!");
//       } else {
//         alert("Login Successfull!");

//         navigate("");
//       }
//       console.log(Auth);
//     } catch (error) {
//       setload(false);
//       console.log(error);
//     }
//     setemail("");
//     setPassword("");
//   };

//   return (
//     <Flex
//       bg={"rgb(247,250,252)"}
//       justifyContent={"center"}
//       alignItems={"center"}
//     >
//       <Stack spacing={6} mx={"auto"} px={6}>
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
//           <Stack spacing={4}>
//             <FormControl id="email">
//               <Flex>
//                 <FormLabel color={"green"} fontSize={"md"}>
//                   Enter Email ID
//                 </FormLabel>
//                 <Input
//                   width={"383px"}
//                   value={email}
//                   onChange={(e) => setemail(e.target.value)}
//                   type="email"
//                 />
//               </Flex>
//             </FormControl>

//             <FormControl id="password">
//               <Flex>
//                 <FormLabel color={"green"} fontSize={"md"}>
//                   {" "}
//                   Enter Password
//                 </FormLabel>
//                 <Input
//                   width={"370px"}
//                   value={Password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                 />
//               </Flex>
//             </FormControl>
//             <Stack spacing={10}>
//               <Stack
//                 direction={{ base: "column", sm: "row" }}
//                 align={"start"}
//                 justify={"space-between"}
//               >
//                 <Checkbox color={"green"} fontSize={"md"}>
//                   Remember me
//                 </Checkbox>
//                 <Link color={"green"} fontSize={"sm"}>
//                   Forgot password?
//                 </Link>
//               </Stack>
//               {load ? (
//                 <Button isLoading colorScheme="teal" variant="solid">
//                   Email
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={login}
//                   size="md"
//                   bg={"green.600"}
//                   color={"white"}
//                   _hover={{
//                     bg: "green.700",
//                   }}
//                 >
//                   Log in
//                 </Button>
//               )}
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
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  updateIsAuth,
  updateUser,
} from "../../store/Auth/auth.actions";
import { CloseIcon } from "@chakra-ui/icons";
import axios from "axios";
import {Link as RouterLink} from "react-router-dom"

export default function Loginpage() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.isAuth);
  const toast = useToast();

  console.log(email, Password);
  // const { isAuth, loginUser, logoutUser } = useContext(AuthContext);

  if (isAuth) {
    navigate("/");
  }

  const login = async () => {
    setload(true);

    try {
      let res = await fetch(`https://lesn-shop-server.onrender.com/users`);
      let AdRes = await axios.get(
        `https://lesn-shop-server.onrender.com/admin`
      );
      let admin = AdRes?.data[0];
      console.log("admin",AdRes)
      let data = await res.json()
      // console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].Password === Password) {
          Auth = true;
          console.log(data[i].firstname);
          // localStorage.setItem("name", data[i].firstname);
          localStorage.setItem("user", JSON.stringify(data[i]));
          // loginUser(data[i].name);
          dispatch(updateUser(data[i]));
          dispatch(loginUser());
          // console.log("aasd",data[i]);
          updateIsAuth(data[i]);
          break;
        } else if (admin.email === email && admin.password === Password) {
          console.log("inside else if")
          navigate("/admin_dashboard");
          return;
        }
      }
      setload(false);
      if (Auth == false) {
        // alert("Please enter right email or password!");
        toast({
          title: "Please enter right email or password!",
          // description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        // alert("Login Successfull!");
        toast({
          title: "Login Successfull!",
          description: "You have successfully logged in.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/");
      }
      console.log(Auth);
    } catch (error) {
      setload(false);
      console.log(error);
    }
    setemail("");
    setPassword("");
  };

  return (
    
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      // border={"1px solid red"}
      bg={"gray"}
      // opacity={"0.5"}
      // zIndex={"0"}
    >
      <Box
        // border={"1px solid red"}
        // zIndex={"10"}
        w={"50%"}
        m={"auto"}
        borderRadius={"20px"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        position={"relative"}
        bg={"white"}
      >
        <Stack>
          <Image
            borderTopRadius={"20px"}
            // zIndex={"1"}
            objectFit={"cover"}
            src={
              "https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
            }
            alt={"Login Image"}
          />
        </Stack>

        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"} fontWeight={"normal"}>
              Sign In
            </Heading>{" "}
            <FormControl id="email">
              {" "}
              {/* <FormLabel color={"green"} fontSize={"md"}>
                  Enter Email ID
               </FormLabel> */}{" "}
              <Input
                placeholder="Email*"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              {/* <FormLabel color={"green"} fontSize={"md"}>
                  {" "}
                  Enter Password
                </FormLabel> */}
              <Input
                placeholder="Password*"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox fontSize={"md"}>Remember me</Checkbox>
                <Link textDecoration={"underline"} fontSize={"sm"}>
                  Forgot password?
                </Link>
              </Stack>
              {load ? (
                <Button
                  isLoading
                  colorScheme="teal"
                  borderRadius={"100px"}
                  variant="solid"
                >
                  Email
                </Button>
              ) : (
                <Button
                  onClick={login}
                  size="md"
                  bg={"green.600"}
                  color={"white"}
                  borderRadius={"100px"}
                  _hover={{
                    bg: "gray.400",
                    color: "black",
                  }}
                >
                  Log in
                </Button>
              )}
            </Stack>
            <Text>
              New member?{" "}
              <RouterLink textDecoration={"underline"} to="/signup">
                Create an Account
              </RouterLink>
            </Text>
          </Stack>
        </Flex>

        <Box position={"absolute"} top={"2"} right={"3"}>
          <Link href={"/"}>
            <CloseIcon boxSize={["10px", "15px"]} />
          </Link>
        </Box>
      </Box>
    </Stack>
  );
}
