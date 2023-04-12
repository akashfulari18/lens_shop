import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Divider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import {Link as RouterLink} from "react-router-dom"

export default function Dropdown() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      {/* <Flex
        bg={"#fff"}
        // bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        
        border={"1px solid black"}
        align={"center"}
        position={"fixed"}
        top={"5rem"}
        zIndex={16}

      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          // display={{ base: "flex", md: "flex" }}
         
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          
        </Stack>
      </Flex> */}

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} w={"100%"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              
              <Box
                // border={"1px solid red"}
                padding={"10px"}
                borderRadius={"10px"}
                bg={"white"}
              >
                <Link href={navItem.href ?? "#"}>
                  {/* <Image src={navItem.label} /> */}
                  <Text textAlign={"center"}>{navItem.text}</Text>
                </Link>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                // minW={"sm"}
                w={"fit-content"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, price }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Flex gap={"20px"}>
            <Text fontSize={"sm"}>{subLabel}</Text>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {price}
            </Text>
          </Flex>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
      <Divider />
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{base:"flex", md: "none" }}
      position={"fixed"}
      top={"6.9rem"}
      zIndex={13}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.text} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label,text, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          <RouterLink to={href} >
          {text}
          </RouterLink>
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

const NAV_ITEMS = [
 
  {
    label: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png",
    text: "Kids Glasses",
    href:"/all_kids_glasses",
    // children: [
    //   {
    //     label: "Air Light-Weight",
    //     subLabel: "Powered Lenses",
    //     price: "$1199",
    //     href: "#",
    //   },
    //   {
    //     label: "Kids Glasses",
    //     subLabel: "Powered Lenses",
    //     price: "$3200",
    //     href: "#",
    //   },
    //   {
    //     label: "Lens Cleaner",
    //     subLabel: "Powered Lenses",
    //     price: "$110",
    //     href: "#",
    //   },
    // ],
  },
  {
    label: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png",
    text: "Computer Glasses",
    href:"/all_computer_glasses",
    // children: [
    //   {
    //     label: "Air Light-Weight",
    //     subLabel: "Powered Lenses",
    //     price: "$1199",
    //     href: "#",
    //   },
    //   {
    //     label: "Kids Glasses",
    //     subLabel: "Powered Lenses",
    //     price: "$3200",
    //     href: "#",
    //   },
    //   {
    //     label: "Lens Cleaner",
    //     subLabel: "Powered Lenses",
    //     price: "$110",
    //     href: "#",
    //   },
    // ],
  },
  // {
  //   label: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png",
  //   text: "Contact Lences",
  //   children: [
  //     {
  //       label: "Air Light-Weight",
  //       subLabel: "Powered Lenses",
  //       price: "$1199",
  //       href: "#",
  //     },
  //     {
  //       label: "Kids Glasses",
  //       subLabel: "Powered Lenses",
  //       price: "$3200",
  //       href: "#",
  //     },
  //     {
  //       label: "Lens Cleaner",
  //       subLabel: "Powered Lenses",
  //       price: "$110",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png",
  //   text: "Power Sunglasses",
  //   children: [
  //     {
  //       label: "Air Light-Weight",
  //       subLabel: "Powered Lenses",
  //       price: "$1199",
  //       href: "#",
  //     },
  //     {
  //       label: "Kids Glasses",
  //       subLabel: "Powered Lenses",
  //       price: "$3200",
  //       href: "#",
  //     },
  //     {
  //       label: "Lens Cleaner",
  //       subLabel: "Powered Lenses",
  //       price: "$110",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg",
  //   text: "Progressive Lenses",
  //   children: [
  //     {
  //       label: "Air Light-Weight",
  //       subLabel: "Powered Lenses",
  //       price: "$1199",
  //       href: "#",
  //     },
  //     {
  //       label: "Kids Glasses",
  //       subLabel: "Powered Lenses",
  //       price: "$3200",
  //       href: "#",
  //     },
  //     {
  //       label: "Lens Cleaner",
  //       subLabel: "Powered Lenses",
  //       price: "$110",
  //       href: "#",
  //     },
  //   ],
  // },
];
