import React from "react"
import { GridItem, Text, Divider, Flex, Avatar, Box } from "@chakra-ui/react"
import Work from "../../data/work.json"

const Employers = () => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={{ base: 12, md: 6, lg: 4 }}
      bg={{ base: "white" }}
      p={4}
    >
      <Text fontSize="md" mb="3">
        {Work.title}
      </Text>
      <Divider mb="3" />
      {Work.employers.map(item => (
        <Flex mb="3" key={item.id}>
          <Avatar src={item.src} alt={item.imageAlt} />
          <Box ml="3">
            <Text fontWeight="bold">{item.company}</Text>
            <Text fontSize="sm">{item.title}</Text>
            <Text fontSize="xs">{item.duration}</Text>
          </Box>
        </Flex>
      ))}
    </GridItem>
  )
}

export default Employers
