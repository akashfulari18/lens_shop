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
import slideshow1 from "../Home/assets/slideshow1.png";
import slideshow2 from "../Home/assets/slideshow2.png";
import slideshow3 from "../Home/assets/slideshow3.png";
import slideshow4 from "../Home/assets/slideshow4.png";
import slideshow5 from "../Home/assets/slideshow5.png";
import slideshow6 from "../Home/assets/slideshow6.png";
import slideshow7 from "../Home/assets/slideshow7.png";
import slideshow8 from "../Home/assets/slideshow8.png";
import slideshow9 from "../Home/assets/slideshow9.png";
import slideshow10 from "../Home/assets/slideshow10.png";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
};

export default function Slideshow1() {
  const [slider, setSlider] = React.useState(<Slider />);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image: slideshow1,
    },
    {
      image: slideshow2,
    },
  ];

  const cards2 = [
    {
      image: slideshow3,
    },
    {
      image: slideshow4,
    },
  ];

  return (
    <>
      <Box width={"80%"} margin={"auto"} mt={"30px"}>
        <Heading fontSize={"30px"} fontWeight={"medium"}>
          EYEGLASSES
        </Heading>
        <hr />
      </Box>
      <Box
        position={"relative"}
        height={"180px"}
        width={"80%"}
        margin={"auto"}
        overflow={"hidden"}
        mt={"30px"}
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
          top={"80px"}
          left={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          color={"gray"}
        >
          <BiLeftArrowAlt size="30px" />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          top={"80px"}
          right={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          color={"gray"}
        >
          <BiRightArrowAlt size="30px" />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              //   border="1px solid red"
              key={index}
              height={"150px"}
              width={"fit-conmtent"}
              m={"auto"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>

      <Box width={"80%"} margin={"auto"} mt={"30px"}>
        <Heading fontSize={"30px"} fontWeight={"medium"}>
          SUNGLASSES
        </Heading>
        <hr />
      </Box>
      <Box
        position={"relative"}
        height={"180px"}
        width={"80%"}
        margin={"auto"}
        overflow={"hidden"}
        mt={"30px"}
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
          top={"80px"}
          left={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          color={"gray"}
        >
          <BiLeftArrowAlt size="30px" />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          top={"80px"}
          right={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          color={"gray"}
        >
          <BiRightArrowAlt size="30px" />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards2.map((card, index) => (
            <Box
              //   border="1px solid red"
              key={index}
              height={"150px"}
              width={"fit-conmtent"}
              m={"auto"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

function Slideshow2() {
  const [slider, setSlider] = React.useState(<Slider />);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards3 = [
    {
      image: slideshow5,
    },
    {
      image: slideshow6,
    },
  ];

  const cards4 = [
    {
      image: slideshow7,
    },
    {
      image: slideshow8,
    },
  ];

  return (
    <>
      <Box width={"80%"} margin={"auto"} mt={"30px"}>
        <Heading fontSize={"30px"} fontWeight={"medium"}>
          WITH POWER COMPUTER BLU LENSES
        </Heading>
        <hr />
      </Box>
      <Box
        position={"relative"}
        height={"180px"}
        width={"80%"}
        margin={"auto"}
        overflow={"hidden"}
        mt={"30px"}
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
          top={"80px"}
          left={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          color={"gray"}
        >
          <BiLeftArrowAlt size="30px" />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          top={"80px"}
          right={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          color={"gray"}
        >
          <BiRightArrowAlt size="30px" />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards3.map((card, index) => (
            <Box
              //   border="1px solid red"
              key={index}
              height={"150px"}
              width={"fit-conmtent"}
              m={"auto"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>

      <Box width={"80%"} margin={"auto"} mt={"30px"}>
        <Heading fontSize={"30px"} fontWeight={"medium"}>
          WITH ZERO POWER COMPUTER BLU LENSES
        </Heading>
        <hr />
      </Box>
      <Box
        position={"relative"}
        height={"180px"}
        width={"80%"}
        margin={"auto"}
        overflow={"hidden"}
        mt={"30px"}
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
          top={"80px"}
          left={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          color={"gray"}
        >
          <BiLeftArrowAlt size="30px" />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          top={"80px"}
          right={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          color={"gray"}
        >
          <BiRightArrowAlt size="30px" />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards4.map((card, index) => (
            <Box
              //   border="1px solid red"
              key={index}
              height={"150px"}
              width={"fit-conmtent"}
              m={"auto"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
export { Slideshow2 };

function Slideshow3() {
  const [slider, setSlider] = React.useState(<Slider />);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards5 = [
    {
      image: slideshow9,
    },
    {
      image: slideshow10,
    },
  ];

  return (
    <>
      <Box width={"80%"} margin={"auto"} mt={"30px"}>
        <Heading fontSize={"30px"} fontWeight={"medium"}>
          CONTACT LENSES
        </Heading>
        <hr />
      </Box>
      <Box
        position={"relative"}
        height={"180px"}
        width={"80%"}
        margin={"auto"}
        overflow={"hidden"}
        mt={"30px"}
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
          top={"80px"}
          left={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          color={"gray"}
        >
          <BiLeftArrowAlt size="30px" />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          top={"80px"}
          right={"1px"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          color={"gray"}
        >
          <BiRightArrowAlt size="30px" />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards5.map((card, index) => (
            <Box
              //   border="1px solid red"
              key={index}
              height={"150px"}
              width={"fit-conmtent"}
              m={"auto"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
export { Slideshow3 };
