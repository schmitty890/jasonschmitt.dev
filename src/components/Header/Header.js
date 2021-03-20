import React from "react"
import { Box, GridItem, Flex, Avatar, Text, Badge } from "@chakra-ui/react"
import me from "../../../static/images/jasonschmitt2.png"
import unccLogo from "../../../static/images/uncc.png"

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
      <Flex>
        <Avatar src={me} size="lg" />
        <Box ml="3">
          <Text fontWeight="bold">Jason Schmitt</Text>
          <Text fontSize="sm">Website Developer</Text>
          <Text fontSize="xs">Location: North Carolina</Text>
        </Box>
      </Flex>
      <Flex>
        <Avatar src={unccLogo} size="lg" />
        <Box ml="3">
          <Text fontWeight="bold">
            UNC Charlotte
            <Badge ml="1" colorScheme="yellow">
              In Progress
            </Badge>
          </Text>
          <Text fontSize="sm">Information Technology, M.S.</Text>
          <Text fontSize="xs">
            Concentration: Software Systems Design and Engineering
          </Text>
        </Box>
      </Flex>
    </GridItem>
  )
}

export default Header
