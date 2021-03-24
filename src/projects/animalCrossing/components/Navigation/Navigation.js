import React from "react"
import {
  Box,
  GridItem,
  Flex,
  Avatar,
  Text,
  Badge,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Link,
  ExternalLinkIcon,
} from "@chakra-ui/react"

const Navigation = () => {
  return (
    <GridItem
      p={4}
      rowSpan={6}
      colSpan={{ base: 12 }}
      bg={{ base: "white" }}
      justifyContent={"space-between"}
      display={"inline-flex"}
    >
      <Menu closeOnSelect={true}>
        <MenuButton as={Button} colorScheme="blue">
          MenuItem
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <Link href="/projects/animalCrossing/art">
              <MenuItemOption value="art">art</MenuItemOption>
            </Link>
            <Link href="/projects/animalCrossing/fish">
              <MenuItemOption value="fish">fish</MenuItemOption>
            </Link>
            <Link href="/projects/animalCrossing/fossils">
              <MenuItemOption value="fossils">fossils</MenuItemOption>
            </Link>
            <Link href="/projects/animalCrossing/seaCreatures">
              <MenuItemOption value="sea creatures">
                sea creatures
              </MenuItemOption>
            </Link>
            <Link href="/projects/animalCrossing/villagers">
              <MenuItemOption value="villagers">villagers</MenuItemOption>
            </Link>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </GridItem>
  )
}

export default Navigation
