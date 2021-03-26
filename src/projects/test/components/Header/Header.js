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
import { AuthConsumer } from "../../../../projects/test/contexts/AuthContext"

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
        <Heading mb={4}>Testing playground</Heading>
        <Text fontSize="xl">testing stuff</Text>
        {/* <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button> */}
      </Box>
    </GridItem>
  )
}

export default Header
