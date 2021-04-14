import React from "react"
import {
  Box,
  Text,
  Grid,
  Badge,
  Avatar,
  Skeleton,
  SkeletonCircle,
  Image,
  Stack,
  Spinner,
  Switch,
  Table,
  Th,
  Tr,
  Tbody,
  Tfoot,
  Thead,
  Td,
  Progress,
} from "@chakra-ui/react"
import { ScheduleConsumer } from "../../contexts/ScheduleContext"

const DetailedState = props => {
  return (
    <ScheduleConsumer>
      {({ schedule, viewMoreData }) => (
        <Grid templateColumns="repeat(2, 1fr)" mb="2">
          {props.game.status.detailedState == "Final" ? (
            <Box align="left">
              <Badge colorScheme="red">{props.game.status.detailedState}</Badge>
            </Box>
          ) : props.game.status.detailedState == "Game Over" ? (
            <Box align="left">
              <Badge colorScheme="red">{props.game.status.detailedState}</Badge>
            </Box>
          ) : props.game.status.detailedState == "Scheduled" ? (
            <Box align="left">
              <Badge colorScheme="yellow">
                {props.game.status.detailedState}
              </Badge>
            </Box>
          ) : props.game.status.detailedState == "Postponed" ? (
            <Box align="left">
              <Badge colorScheme="yellow">
                {props.game.status.detailedState}
              </Badge>
            </Box>
          ) : props.game.status.detailedState == "In Progress" ? (
            <Box align="left">
              <Badge colorScheme="green">
                {props.game.status.detailedState}
              </Badge>
            </Box>
          ) : props.game.status.detailedState == "Pre-Game" ? (
            <Box align="left">
              <Badge colorScheme="yellow">
                {props.game.status.detailedState}
              </Badge>
            </Box>
          ) : props.game.status.detailedState == "In Progress - Critical" ? (
            <Box align="left">
              <Badge colorScheme="red">{props.game.status.detailedState}</Badge>
            </Box>
          ) : props.game.status.detailedState == "Scheduled" ? (
            <Box align="left">
              <Badge colorScheme="green">
                {props.game.status.detailedState}
              </Badge>
            </Box>
          ) : (
            <Box align="left">
              <Badge colorScheme="red">Status unknown</Badge>
            </Box>
          )}

          <Box align="right">Start time: {props.game.gameDate}</Box>
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default DetailedState
