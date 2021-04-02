import React from "react"
import {
  GridItem,
  Text,
  Divider,
  Flex,
  Avatar,
  Box,
  Spinner,
  SkeletonCircle,
  Button,
  Badge,
  useToast,
} from "@chakra-ui/react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  SpotifyRecommendationsProvider,
  SpotifyRecommendationsConsumer,
} from "../../contexts/SpotifyRecommendationsContext"

const Recommendations = () => {
  const toast = useToast()
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <SpotifyRecommendationsProvider>
      <SpotifyRecommendationsConsumer>
        {({ test, recommendedTracks, addTrackToPlaylist, getNewTracks }) => (
          <GridItem
            rowSpan={1}
            colSpan={{ base: 12 }}
            bg={{ base: "white" }}
            p={4}
            pb={10}
          >
            <Text>
              Recommendations
              <Button
                colorScheme="teal"
                variant="outline"
                onClick={getNewTracks}
                ml={4}
              >
                Refresh recommendations
              </Button>
            </Text>
            <Slider {...settings}>
              {recommendedTracks.map((item, index) => (
                <GridItem
                  rowSpan={12}
                  colSpan={{ base: 3, md: 2, lg: 1 }}
                  bg={{ base: "white" }}
                  p={4}
                >
                  <Flex mb="3" key={index}>
                    <Avatar
                      src={item.album.images[2].url}
                      alt={item.album.name}
                      loading="eager"
                      icon={<SkeletonCircle size="12" />}
                    />
                    <Box ml="3">
                      <Text fontSize="xs">
                        {item.popularity > 65 ? (
                          <Badge colorScheme="green">Popular</Badge>
                        ) : null}
                      </Text>

                      <Text fontWeight="bold">{item.name}</Text>
                      <Text fontSize="sm">{item.name}</Text>
                      <Text fontSize="xs">{item.album.release_date}</Text>
                      <Button
                        colorScheme="teal"
                        variant="outline"
                        spotifyURI={item.uri}
                        onClick={e =>
                          addTrackToPlaylist(e).then(res => {
                            console.log(res)
                            toast({
                              title: `${res.msg}`,
                              status: res.status,
                              isClosable: true,
                              duration: 3000,
                            })
                          })
                        }
                      >
                        Add
                      </Button>
                    </Box>
                  </Flex>
                </GridItem>
              ))}
            </Slider>
          </GridItem>
        )}
      </SpotifyRecommendationsConsumer>
    </SpotifyRecommendationsProvider>
  )
}

export default Recommendations
