import React, { Component } from "react"
import {
  GridItem,
  Image,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
} from "@chakra-ui/react"
import { AnimalCrossingFossilConsumer } from "../../contexts/animalCrossingFossilContext"

// const TableData = () => {
class TableDataFossils extends Component {
  logState = (e, logOutTheState) => {
    logOutTheState()
  }
  render() {
    return (
      <AnimalCrossingFossilConsumer>
        {({ fossils, logOutTheState }) => (
          <GridItem
            rowSpan={1}
            colSpan={{ base: 12 }}
            bg={{ base: "white" }}
            p={4}
          >
            <Button
              colorScheme="blue"
              onClick={e => this.logState(e, logOutTheState)}
            >
              log out the current state
            </Button>
            <Table size="sm" variant="striped" colorScheme="teal">
              <Thead>
                <Tr className="animal-crossing--stickyHead">
                  <Th>Name</Th>
                  <Th>Image</Th>
                  <Th isNumeric>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {fossils.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.name["name-USen"]}</Td>
                    <Td>
                      <Image boxSize="50px" src={item.image_uri} />
                    </Td>
                    <Td isNumeric>{item.price}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </GridItem>
        )}
      </AnimalCrossingFossilConsumer>
    )
  }
}

export default TableDataFossils
