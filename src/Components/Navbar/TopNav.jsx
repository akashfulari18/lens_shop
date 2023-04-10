import React, { useContext, useEffect } from "react";
import {
  Text,
  Image,
  Box,
  HStack,
  Avatar,
  Heading,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import Styles from "./TopNav.module.css";
import Hover from "./Hover";
import final_logo from "../../assets/final-logo.png";
// import Login from "../Login";
// import Signup from "../Signup";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

import { Navigate, useNavigate } from "react-router-dom";
import { TriangleDownIcon } from "@chakra-ui/icons";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AuthContext } from "../../Pages/Signup-Login/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUser,
  updateIsAuth,
  updateIsAuthLogout,
} from "../../store/Auth/auth.actions";
import { Link } from "react-router-dom";
import {
  getComputerGlassData,
  getKidsData,
} from "../../store/Product/product.actions";
import NavSearch from "./NavSearch";
// import { AuthContext } from "../../ContextApi/AuthContext";

const TopNav = () => {
  // drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  //modal
  // const { IsOpen, OnOpen, OnClose } = useDisclosure();

  const firstField = React.useRef();
  const navigate = useNavigate();

  // const { firstname, isAuth, logoutUser } = useContext(AuthContext);

  const isAuth = useSelector((store) => store.auth.isAuth);
  const user = useSelector((store) => store.auth.user);
  const { compGlassData } = useSelector((store) => store.product);
  const { kids } = useSelector((store) => store.product);
  const allData = [...compGlassData, ...kids];
  console.log("allData", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComputerGlassData());
    dispatch(getKidsData());
  }, []);

  return (
    <div className={Styles.tn_div_1} style={{ width: "100%" }}>
      <div className={Styles.tn_div_2}>
        <div className={Styles.mobView}>
          <Button
            leftIcon={<FiMenu />}
            colorScheme="teal"
            onClick={onOpen}
          ></Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent w="100%" bg="#27394E">
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                <div
                  className={Styles.div1}
                  style={{ borderBottom: "2px solid #18CFA8", padding: "5%" }}
                >
                  <div className={Styles.div2}>
                    <Avatar src="https://bit.ly/broken-link" />
                    <div className={Styles.div3}>
                      <h3 style={{ color: "white", marginTop: "10px" }}>
                        Hi, Specsy
                      </h3>
                      <Link color="#CCCCCC" fontSize="50%" mt="5%">
                        Enjoy Buy 1 Get 1 offer for 365 days
                      </Link>
                    </div>
                  </div>
                  <Button
                    bg="#00BAC6"
                    w="100%"
                    h="32px"
                    mt="5%"
                    color="#FFFFFF"
                  >
                    GET GOLD MEMBERSHIP
                  </Button>
                </div>
                <Box display="flex" flexDirection="column">
                  <Link
                    color="white"
                    mt="10%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    My Orders
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Manage Notification
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="3px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Contact Us
                  </Link>
                </Box>
                <Heading mt="15%" color="white" fontSize="80%">
                  HIGHLIGHTS
                </Heading>
                <Box display="flex" flexDirection="column">
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Check Frame Size
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Gold Membership
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Try Frames in 3D
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Dowloads Apps
                  </Link>
                </Box>
                <Heading mt="15%" color="white" fontSize="80%">
                  SHOP NOW
                </Heading>
                <Box display="flex" flexDirection="column">
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Men
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Women
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Kids
                  </Link>
                </Box>
                <Heading mt="15%" color="white" fontSize="80%">
                  Our Services
                </Heading>
                <Box display="flex" flexDirection="column">
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Free Home Trail
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Home Eye check-up
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Store Locator
                  </Link>
                </Box>
                <Heading mt="15%" color="white" fontSize="80%">
                  International
                </Heading>
                <Box display="flex" flexDirection="column">
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Singapore
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    USA
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    UAE
                  </Link>
                </Box>
                <Heading mt="15%" color="white" fontSize="80%">
                  FAQ's & POLICIES
                </Heading>
                <Box display="flex" flexDirection="column">
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Frequently Asked Questions
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Cancellation & Return Policy
                  </Link>
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Cobrowsing
                  </Link>
                </Box>
                <Box mt="15%">
                  <Link
                    color="white"
                    mt="6%"
                    borderBottom="1px solid #526171"
                    pb="5%"
                    fontSize="72%"
                  >
                    Logout
                  </Link>
                </Box>
                <Accordion allowMultiple></Accordion>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
        <Box bg="#FFFFFF" >
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            p="1rem 2rem"
          >
            <Box
              w="10%"
              cursor="pointer"
              ml="-0.5"
              bg=""
              className={Styles.logo}
            >
              <Link to="/">
                <Image w="100%" h="100%" src={final_logo} alt="LensShop" />
              </Link>
            </Box>
            {/* <Box width="10%" ml="5%" bg="">
              <Image
                h="100%"
                width="100%"
                src="https://static.lenskart.com/media/mobile/images/phone_number.svg"
                alt="ph-no"
              ></Image>
            </Box> */}
            <Box display={{base:"none",md:"block",lg:"block"}} p="0.6%" bg="" w="40%" ml="1%" className={Styles.searchBox}>
              <NavSearch />
            </Box>
            <Box fontSize="1rem" fontFamily="sans-serif" w="40%">
              <Box display="flex" justifyContent="flex-end" gap={"2rem"}>
                <Box display="flex" alignItems={"center"}>
                  <Flex gap="0.5rem">
                    {isAuth ? (
                      <Flex gap={"0.5rem"}>
                        <Text
                          fontWeight={"bold"}
                          fontSize={{
                            base: "0.7rem",
                            md: "0.7rem",
                            lg: "1rem",
                          }}
                        >
                          {user?.firstname}
                        </Text>
                        <Link
                          to="/"
                          onClick={() => {
                            updateIsAuthLogout(user);
                            dispatch(logoutUser());
                          }}
                        >
                          <Text fontSize={{
                            base: "0.7rem",
                            md: "0.7rem",
                            lg: "1rem",
                          }}>Logout</Text>
                        </Link>
                      </Flex>
                    ) : (
                      <>
                        <HStack>
                          <Link
                            to="/login"
                            fontWeight={"400"}
                            
                            // mr={"10px"}
                          >
                            <Text fontSize={{
                              base: "0.7rem",
                              md: "0.7rem",
                              lg: "1rem",
                            }}> Sign In |</Text>
                          </Link>
                          <Link
                            to="/signup"
                            fontWeight={"400"}
                           
                          >
                            <Text fontSize={{
                              base: "0.7rem",
                              md: "0.7rem",
                              lg: "1rem",
                            }}>Sign Up</Text>
                          </Link>
                        </HStack>
                      </>
                    )}
                  </Flex>
                </Box>
                <Flex gap="0.5rem">
                  <Box display="flex" gap={"0.5rem"} cursor="pointer">
                    <Image
                      h="1rem"
                      src="https://static.lenskart.com/media/desktop/img/wishlist.png"
                      alt="icon"
                    ></Image>
                    <Text fontSize={{
                            base: "0.7rem",
                            md: "0.7rem",
                            lg: "1rem",
                          }}>Wishlist</Text>
                  </Box>

                  <Box display="flex" gap={"0.5rem"} cursor="pointer" position={"relative"}>
                    <Image
                      h="1rem"
                      src="https://static.lenskart.com/media/desktop/img/cart.png"
                      alt="icon"
                    ></Image>
                    <Text fontSize={{
                            base: "0.7rem",
                            md: "0.7rem",
                            lg: "1rem",
                          }} >
                      <Link to="/cart">Cart</Link>
                      <Box pos="absolute" top={"-1rem"} w={"50%"} right={"-1rem"} backgroundColor={"cyan.400"} borderRadius={"50%"} textAlign={"center"}>{user?.cart?.length}</Box>
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box margin={"auto"} display={{base:"flex",md:"none",lg:"none"}} border={"1px solid white"} p="0.6%" bg="" w="70%" className={Styles.searchBox}>
              <NavSearch />
            </Box>
          <HStack
            fontWeight="bold"
            bg="#FBF9F7"
            fontFamily="sans-serif"
            h="65px"
            w="100%"
            position="relative"
            display={{base:"none",md:"flex",lg:"flex"}}
          >
            <Hover />
            <Box
              spacing="5px"
              w=""
              display="flex"
              alignItems="center"
              right="2rem"
              gap="0.5rem"
              h="100%"
              position="absolute"
            >
              <Image
                h="55%"
                w="35%"
                borderRadius="5px"
                cursor="pointer"
                src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
                alt="try on 3D"
              ></Image>
              <Image
                h="55%"
                w="35%"
                borderRadius="5px"
                cursor="pointer"
                src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
                alt="BLU"
              ></Image>
              <Image
                h="55%"
                w="35%"
                borderRadius="5px"
                cursor="pointer"
                src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
                alt="GOLD"
              ></Image>
            </Box>
          </HStack>
        </Box>
        
      </div>
    </div>
  );
};
export default TopNav;
