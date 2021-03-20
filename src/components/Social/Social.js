import React from "react"
import { GridItem, Flex } from "@chakra-ui/react"
import { SocialIcon } from "react-social-icons"

const Social = () => {
  return (
    <GridItem
      p={4}
      rowSpan={6}
      colSpan={{ base: 12 }}
      bg={{ base: "white" }}
      justifyContent={"center"}
      display={"inline-flex"}
    >
      <Flex>
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/jasonlschmitt/"
        />
      </Flex>

      <Flex ml={3}>
        <SocialIcon
          target="_blank"
          bgColor="#000"
          url="https://github.com/schmitty890"
        />
      </Flex>
    </GridItem>
  )
}

export default Social
