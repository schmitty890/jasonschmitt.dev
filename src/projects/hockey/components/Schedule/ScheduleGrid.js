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
import GameClock from "./GameClock"
import Card from "./Card"
import DetailedState from "./DetailedState"
import CurrentPlay from "./CurrentPlay"
import MileStones from "./MileStones"
import { ScheduleConsumer } from "../../contexts/ScheduleContext"

const ScheduleGrid = () => {
  return (
    <ScheduleConsumer>
      {({ schedule, viewMoreData }) => (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          {schedule.dates[0].games.map(game => (
            <Box
              w="100%"
              bg="gray.300"
              // border="1px"

              borderRadius="5"
              mt="2"
              p="2"
              align="center"
              key={game.gamePk}
            >
              {/* START INDIVIDUAL GAME TOP SECTION */}
              <GameClock game={game} />
              {/* END INDIVIDUAL GAME TOP SECTION */}

              {/* START INDIVIDUAL GAME 2ND TOP SECTION */}
              <DetailedState game={game} />
              {/* END INDIVIDUAL GAME 2ND TOP SECTION */}

              {/* START GAME SECTION */}
              <Card game={game} team="away" />
              {/* END GAME SECTION */}
              {/* START GAME SECTION */}
              <Card game={game} team="home" />
              {/* START GAME SECTION */}

              {/* START LIVE DATA SECTION */}
              <CurrentPlay game={game} />
              {/* END LIVE DATA SECTION */}

              <MileStones game={game} />
            </Box>
          ))}
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default ScheduleGrid
