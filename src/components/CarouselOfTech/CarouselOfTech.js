import React from "react"
import { GridItem } from "@chakra-ui/react"
import {
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaGulp,
  FaHtml5,
  FaCss3,
  FaLess,
  FaSass,
} from "react-icons/fa"

import {
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiJavascript,
  SiJquery,
  SiBootstrap,
} from "react-icons/si"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CarouselOfTech = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <GridItem
      rowSpan={1}
      colSpan={{ base: 12 }}
      bg={{ base: "white" }}
      p={4}
      pb={10}
    >
      <Slider {...settings}>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <FaNodeJs style={{ margin: "auto", color: "#68A063" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <FaReact style={{ margin: "auto", color: "#61DBFB" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <FaVuejs style={{ margin: "auto", color: "#41B883" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <FaGulp style={{ margin: "auto", color: "#DB4446" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <FaHtml5 style={{ margin: "auto", color: "#F16529" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <FaCss3 style={{ margin: "auto", color: "#2965f1" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <SiMongodb style={{ margin: "auto", color: "#3FA037" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <SiMysql style={{ margin: "auto", color: "#00758F" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <SiJsonwebtokens style={{ margin: "auto", color: "#d63aff" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <SiJavascript style={{ margin: "auto", color: "#F0DB4F" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <SiJquery style={{ margin: "auto", color: "#0868AC" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <FaLess style={{ margin: "auto", color: "#1d365d" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <FaSass style={{ margin: "auto", color: "#CD6799" }} />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={{ base: 3, md: 2, lg: 1 }}
          bg={{ base: "white" }}
          p={4}
        >
          <SiBootstrap style={{ margin: "auto", color: "#602C50" }} />
        </GridItem>
      </Slider>
    </GridItem>
  )
}

export default CarouselOfTech
