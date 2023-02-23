import React, { ReactNode, useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import logo from "../../../public/final-logo.png";

import { FaUserCog, FaProductHunt } from "react-icons/fa";
import axios from "axios";
import PieChartData from "./PieChartData";
import { NavLink, useNavigate } from "react-router-dom";
import ComputerGlassPanel from "./ComputerGlassPanel";
import KidsGlassPanel from "./KidsGlassPanel";

const LinkItems = [
  { name: "Home", icon: FiHome, href: "/admin_dashboard" },
  { name: "Products", icon: FaProductHunt, href: "/admin_product" },
  { name: "Users", icon: FaUserCog, href: "/admin_users" },
  { name: "Admin Setting", icon: FiSettings, href: "/admin_settings" },
];

export default function AdminProducts({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [computerGlass, setComputerGlass] = useState([]);
  let [kidsGlass, setKidsGlass] = useState([]);
  let [user, setUsers] = useState([]);

  let getComputerGlassData = async () => {
    await axios
      .get(`https://lesn-shop-server.onrender.com/all_computer_glasses`)
      .then((res) => {
        setComputerGlass(res.data);
      })
      .catch((e) => console.log(e));
  };
  let getKidsGlassData = async () => {
    await axios
      .get(`https://lesn-shop-server.onrender.com/all_kids_glasses`)
      .then((res) => {
        setKidsGlass(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getComputerGlassData();
    getKidsGlassData();
  }, []);

  console.log("user", kidsGlass.length);

  const BoxStyle = {
    // border:"1px solid red",
    padding: "1rem",
    backgroundColor: "rgb(173 76 211 / 92%)",
    color: "#fff",
    width: "200px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };

  const BoxText = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "black",
  };
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      top="0"
      w={"100%"}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" backgroundColor={"red.100"} pt="1rem">
        {children}

        <Flex
          textAlign={"center"}
          width={"100%"}
          justifyContent="space-between"
          gap="2rem"
          flexWrap={"wrap"}
        >
          <Box style={BoxStyle}>
            <Text>Total Users</Text>

            <Text style={BoxText}> ({user.length})</Text>
          </Box>
          <Box>
            <Button
              colorScheme={"gray"}
              variant={"outline"}
              backgroundColor="purple.300"
            >
              Add New Product
            </Button>
          </Box>
        </Flex>

        <Box mt={4}>
          <Tabs colorScheme={"green"}>
            <TabList>
              <Tab>Computer Glasses </Tab>
              <Tab>Kids eye Glasses</Tab>
              
            </TabList>

            <TabPanels>
              <TabPanel>
                <ComputerGlassPanel/>
              </TabPanel>
              <TabPanel>
                <KidsGlassPanel/>
              </TabPanel>
             
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();

  const goTo = (addr) => {
    navigate(addr);
  };

  return (
    <Box
      top="0"
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      zIndex={20}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image src={logo} h="50px" w="100px" />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          <Text onClick={() => goTo(link.href)}>{link.name}</Text>
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const [admin, setAdmin] = useState([]);
  let getAdminData = async () => {
    axios
      .get(`https://lesn-shop-server.onrender.com/admin`)
      .then((res) => {
        let ad = res?.data[0];
        setAdmin(ad);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getAdminData();
  }, []);

  return (
    <Flex
      position="fixed"
      top="0"
      w={["100%", "100%", "85%"]}
      zIndex={20}
      height="8rem"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack mr={{ base: "0", md: "6rem" }}>
                <Avatar size={"sm"} name={admin.name} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{admin.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
