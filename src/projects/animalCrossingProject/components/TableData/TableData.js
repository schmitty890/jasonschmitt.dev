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
                <Th isNumeric>Price from CJ</Th>
                <Th>Shadow size</Th>
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
                  <Td isNumeric>{item["price-cj"]}</Td>
                  <Td>{item.shadow}</Td>
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
