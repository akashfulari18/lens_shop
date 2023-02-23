import { Box, Divider, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
import CaptionCarousel from "./Home-Carousel";
import Dropdown from "./Home-Dropdown";
import Slideshow1, { Slideshow2, Slideshow3 } from "./Home-Slideshow";

const Home = () => {
  return (
    <div>
      <Dropdown />
      <CaptionCarousel />
      <Image
        mt={"-50px"}
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        alt="xyz"
      />

      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        As Seen on Shark Tank
      </Box>
      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
      />
      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        Trending Sunglasses
      </Box>
      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />
      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        OJOS
      </Box>
      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/ojos%20banner/ojos%20banner/web%20banner/ojos-web-1199.gif"
      />
      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        Aquacolor - Glam Up With Color Lenses
      </Box>
      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
      />
      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        FIND THE PERFECT FIT
      </Box>
      <Grid
        width={"80%"}
        margin="auto"
        mt={"15px"}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg"
            alt="xyz"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
            alt="xyz"
          />
        </GridItem>

        <GridItem colStart={2}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
            alt="xyz"
          />
        </GridItem>

        <GridItem rowStart={3}>
          {" "}
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
            alt="xyz"
          />
        </GridItem>

        <GridItem rowStart={3}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
            alt="xyz"
          />
        </GridItem>
      </Grid>
      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        INTRODUCING OJOS Wear - SUBSCRIBE & SAVE
      </Box>
      <Image
        w={"80%"}
        m={"auto"}
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
      />
      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        CONTACT LENSES & MORE
      </Box>
      <Grid
        width={"80%"}
        margin="auto"
        mt={"15px"}
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem>
          <Image src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg" />
        </GridItem>
      </Grid>
      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        BUY IT YOUR WAY
      </Box>
      <Grid
        width={"90%"}
        margin="auto"
        mt={"15px"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem>
          <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/call1800.jpg" />
        </GridItem>
        <GridItem>
          <Image src="https://static1.lenskart.com/media/desktop/img/Nov21/whatsapp.jpg" />
        </GridItem>
        <GridItem mt={"-38px"}>
          <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg" />
        </GridItem>
        <GridItem mt={"-38px"}>
          <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg" />
        </GridItem>
      </Grid>

      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        OUR BRANDS
      </Box>
      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
      />

      {/* <Heading>Slideshow</Heading> */}
      <Slideshow1 />

      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
      />

      {/* <Heading>Slideshow</Heading> */}
      <Slideshow2 />

      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"
      />

      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        HOOPER
      </Box>
      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
      />

      <hr style={{ marginTop: "50px", colorScheme: "black" }} />
      <Box
        fontWeight="medium"
        fontSize={"30px"}
        width="fit-content"
        margin={"auto"}
        mt={"-32px"}
        bg={"white"}
        padding="10px"
      >
        Aqualens
      </Box>
      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
      />

      <Slideshow3 />

      <Image
        mt={"10px"}
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png"
      />
    </div>
  );
};

export default Home;
