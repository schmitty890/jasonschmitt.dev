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
} from "@chakra-ui/react"
import me from "../../../../../static/images/jasonschmitt2.png"
import unccLogo from "../../../../../static/images/uncc.png"

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
      {/* <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="blue">
          MenuItem
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Country" type="checkbox">
            <MenuItemOption value="email">Email</MenuItemOption>
            <MenuItemOption value="phone">Phone</MenuItemOption>
            <MenuItemOption value="country">Country</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu> */}
      menu goes here
    </GridItem>
  )
}

export default Navigation
