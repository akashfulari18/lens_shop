import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
// And react-slick as our Carousel Lib

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  // fade: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 3000,
  // slidesToShow: 1,
  // slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(<Slider />);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image:
        "https://static1.lenskart.com/media/desktop/img/Jan23/helios-plp/web%20banner.gif",
    },
    {
      image:
        "https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif",
    },
    {
      image:
        "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
    },
    {
      image:
        "https://static1.lenskart.com/media/desktop/img/Feb23/Launch%20banner.gif",
    },
    {
      image:
        "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/wedding%20edit/web-home.gif",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"500px"}
      width={"100%"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        // top={top}
        top={"200px"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        color={"white"}
      >
        <BiLeftArrowAlt size="50px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        // top={top}
        top={"200px"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        color={"white"}
      >
        <BiRightArrowAlt size="50px" />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"400px"}
            width={"fit-content"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          ></Box>
        ))}
      </Slider>
    </Box>
  );
}
