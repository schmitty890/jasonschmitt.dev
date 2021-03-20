import React from "react"
import { GridItem, Text } from "@chakra-ui/react"

const Efforts = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={{ base: 12 }}
      bg={{ base: "white" }}
      p={4}
      justifyContent={"center"}
      display={"inline-flex"}
    >
      <Text fontSize="md">
        I focus my efforts in becoming proficient in the following technologies
      </Text>
    </GridItem>
  )
}

export default Efforts
