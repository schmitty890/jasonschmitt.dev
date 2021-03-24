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
import { AnimalCrossingVillagersConsumer } from "../../contexts/animalCrossingVillagerContext"

// const TableData = () => {
class TableDataVillagers extends Component {
  logState = (e, logOutTheState) => {
    logOutTheState()
  }
  render() {
    return (
      <AnimalCrossingVillagersConsumer>
        {({ villagers, logOutTheState }) => (
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
                  <Th>Personality</Th>
                  <Th display={{ base: "none", md: "table-cell" }}>Hobby</Th>
                  <Th display={{ base: "none", md: "table-cell" }}>Species</Th>
                  <Th display={{ base: "none", md: "table-cell" }}>Birthday</Th>
                  <Th display={{ base: "none", md: "table-cell" }}>
                    Catch Phrase
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
                {villagers.map(item => (
                  <Tr key={item.id}>
                    <Td>{item.name["name-USen"]}</Td>
                    <Td>
                      <Image boxSize="50px" src={item.icon_uri} />
                    </Td>
                    <Td>{item.personality}</Td>
                    <Td display={{ base: "none", md: "table-cell" }}>
                      {item.hobby}
                    </Td>
                    <Td display={{ base: "none", md: "table-cell" }}>
                      {item.species}
                    </Td>
                    <Td display={{ base: "none", md: "table-cell" }}>
                      {item["birthday-string"]}
                    </Td>
                    <Td display={{ base: "none", md: "table-cell" }}>
                      {item["catch-phrase"]}
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
      </AnimalCrossingVillagersConsumer>
    )
  }
}

export default TableDataVillagers
