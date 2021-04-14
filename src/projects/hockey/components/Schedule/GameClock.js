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

const GameClock = props => {
  return (
    <ScheduleConsumer>
      {({ schedule, viewMoreData }) => (
        <Grid templateColumns="repeat(2, 1fr)">
          {props.game.liveData.liveData.linescore.currentPeriodOrdinal ? (
            <Box align="left">
              {props.game.liveData.liveData.linescore.currentPeriodOrdinal}
              &nbsp;
              {
                props.game.liveData.liveData.linescore
                  .currentPeriodTimeRemaining
              }
            </Box>
          ) : null}
          {props.game.liveData.liveData.linescore.intermissionInfo
            .inIntermission ? (
            <Box align="right">
              <Badge colorScheme="yellow">Intermission</Badge>
            </Box>
          ) : null}
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default GameClock
