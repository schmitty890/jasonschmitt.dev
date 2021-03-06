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
import { AnimalCrossingFishConsumer } from "../../contexts/animalCrossingFishContext"

// const TableData = () => {
class TableDataFish extends Component {
  logState = (e, logOutTheState) => {
    logOutTheState()
  }
  render() {
    return (
      <AnimalCrossingFishConsumer>
        {({ fish, logOutTheState }) => (
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
                  <Th isNumeric>Price</Th>
                  <Th isNumeric display={{ base: "none", md: "table-cell" }}>
                    Price from CJ
                  </Th>
                  <Th display={{ base: "none", md: "table-cell" }}>
                    Shadow size
                  </Th>
                  {/* <Th display={{ base: "none", md: "table-cell" }}>
                  Month Northern
                </Th>
                <Th display={{ base: "none", md: "table-cell" }}>
                  Month Southern
                </Th>
                <Th display={{ base: "none", md: "table-cell" }}>Time</Th>
                <Th display={{ base: "none", md: "table-cell" }}>All Day</Th>
                <Th display={{ base: "none", md: "table-cell" }}>All Year</Th>
                <Th display={{ base: "none", md: "table-cell" }}>Location</Th>
                <Th display={{ base: "none", md: "table-cell" }}>Rarity</Th>
                <Th display={{ base: "none", md: "table-cell" }}>
                  Months North
                </Th>
                <Th display={{ base: "none", md: "table-cell" }}>
                  Months South
                </Th> */}
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
                    {/* <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability["month-northern"]}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability["month-southern"]}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability.time}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability.isAllDay ? "true" : "false"}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability.isAllYear ? "true" : "false"}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability.location}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability.rarity}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability["month-array-northern"]}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {item.availability["month-array-southern"]}
                  </Td> */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </GridItem>
        )}
      </AnimalCrossingFishConsumer>
    )
  }
}

export default TableDataFish
