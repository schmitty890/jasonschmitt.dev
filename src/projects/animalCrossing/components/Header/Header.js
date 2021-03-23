import React from "react"
import {
  Box,
  GridItem,
  Flex,
  Avatar,
  Text,
  Badge,
  Heading,
  Button,
} from "@chakra-ui/react"

const Header = () => {
  return (
    <GridItem
      p={4}
      rowSpan={6}
      colSpan={{ base: 12 }}
      bg={{ base: "white" }}
      justifyContent={"space-between"}
      display={"inline-flex"}
    >
      <Box>
        <Heading mb={4}>Animal Crossing Lookup</Heading>
        <Text fontSize="xl">
          The Animal Crossing New Horizons directory. Lookup fish, sea
          creatures, bugs, fossils, villagers, art, houseware, etc...
        </Text>
        {/* <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button> */}
      </Box>
    </GridItem>
  )
}

export default Header
