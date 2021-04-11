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
  Image,
} from "@chakra-ui/react"
import { AuthConsumer } from "../../contexts/AuthContext"

const Header = () => {
  return (
    <AuthConsumer>
      {({ authTest, user }) => (
        <GridItem p={4} rowSpan={6} colSpan={{ base: 12 }}>
          <Box>
            <Box align="center">
              <Image
                src="../../../images/projects/hockey/nhl.svg"
                alt="nhl"
                h="50"
                loading="eager"
              />
              {user ? (
                <Box align="left">user is {user.firstName}</Box>
              ) : (
                <Box align="left"></Box>
              )}
            </Box>
          </Box>
        </GridItem>
      )}
    </AuthConsumer>
  )
}

export default Header
