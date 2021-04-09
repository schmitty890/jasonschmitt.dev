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
import { AuthConsumer } from "../../contexts/AuthContext"

const Header = () => {
  return (
    <AuthConsumer>
      {({ authTest, user }) => (
        <GridItem
          p={4}
          rowSpan={6}
          colSpan={{ base: 12 }}
          bg={{ base: "white" }}
          justifyContent={"space-between"}
          display={"inline-flex"}
        >
          <Box>
            <Heading mb={4}>Testing playground for hockey project</Heading>
            <Text fontSize="xl">testing stuff for hockey project</Text>
            {user ? (
              <Text>user is {user.firstName}</Text>
            ) : (
              // redirectToHome()
              // <Text>user is {user.firstName}</Text>
              <Text>user is not logged in</Text>
            )}
          </Box>
        </GridItem>
      )}
    </AuthConsumer>
  )
}

export default Header
