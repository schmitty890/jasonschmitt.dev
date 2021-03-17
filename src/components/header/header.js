import React, { Component } from "react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  Image,
  IconButton,
  useBreakpointValue,
  VStack,
  Text,
} from "@chakra-ui/react"

import {
  ChevronDownIcon,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons"

import { UserConsumer } from "../../contexts/UserContext"

const headerDesktop = () => {
  return <div>desktop header</div>
}

const Header = () => {
  return (
    <UserConsumer>
      {({ user }) => (
        <div>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon color="red.500" w={6} h={6} />}
              size="xs"
              w={10}
              h={10}
              variant="outline"
              display={{ base: "block", lg: "none" }}
            />
            <MenuList>
              <MenuItem
                icon={<AddIcon />}
                command="⌘T"
                color={{ base: "black", md: "green", lg: "blue" }}
                display={{ md: "block", lg: "block" }}
              >
                New Tab for {user}
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              display={{ base: "none", lg: "block" }}
            >
              Your Cats
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/120/120"
                  alt="Simon the pensive"
                  mr="12px"
                />
                <span>Simon the pensive</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      )}
    </UserConsumer>
  )
}

export default Header
