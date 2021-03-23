import React from "react"
import {
  Box,
  GridItem,
  Flex,
  Avatar,
  Badge,
  Text,
  Image,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react"
import { AnimalCrossingConsumer } from "../../contexts/animalCrossingContext"

const TableData = () => {
  return (
    <AnimalCrossingConsumer>
      {({ fish }) => (
        <GridItem
          rowSpan={1}
          colSpan={{ base: 12 }}
          bg={{ base: "white" }}
          p={4}
        >
          <Table size="sm" variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Icon</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric display={{ base: "none", md: "table-cell" }}>
                  Price from CJ
                </Th>
                <Th display={{ base: "none", md: "table-cell" }}>
                  Shadow size
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {fish.map(item => (
                <Tr key={item.id}>
                  <Td>{item.name["name-USen"]}</Td>
                  <Td>
                    <Image boxSize="50px" src={item.icon_uri} />
                  </Td>
                  <Td isNumeric>{item.price}</Td>
                  <Td isNumeric display={{ base: "none", md: "table-cell" }}>
                    {item["price-cj"]}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.shadow}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </GridItem>
      )}
    </AnimalCrossingConsumer>
  )
}

export default TableData
