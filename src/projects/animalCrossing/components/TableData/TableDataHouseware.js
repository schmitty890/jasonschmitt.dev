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
import { AnimalCrossingHousewareConsumer } from "../../contexts/animalCrossingHousewareContext"

// const TableData = () => {
class TableDataHouseware extends Component {
  logState = (e, logOutTheState) => {
    logOutTheState()
  }
  render() {
    return (
      <AnimalCrossingHousewareConsumer>
        {({ houseware, logOutTheState }) => (
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
                  <Th>Icon</Th>
                  <Th>Sell Price</Th>
                  <Th>Source</Th>
                  <Th>DIY</Th>
                </Tr>
              </Thead>
              <Tbody>
                {houseware.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.name["name-USen"]}</Td>
                    <Td>
                      <Image boxSize="50px" src={item.image_uri} />
                    </Td>
                    <Td isNumeric>{item["sell-price"]}</Td>
                    <Td>{item.source}</Td>
                    <Td>{item.isDIY ? "true" : "false"}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </GridItem>
        )}
      </AnimalCrossingHousewareConsumer>
    )
  }
}

export default TableDataHouseware
