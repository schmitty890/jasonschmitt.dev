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
import GameCenter from "./GameCenter"
import LiveStatsCard from "./LiveStatsCard"
import { ScheduleConsumer } from "../../contexts/ScheduleContext"
import PlayByPlay from "./PlayByPlay"

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
              {/* <CurrentPlay game={game} /> */}
              {/* END LIVE DATA SECTION */}

              {/* <MileStones game={game} /> */}

              {/* <GameCenter game={game} /> */}

              <PlayByPlay game={game} />

              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={6}
                display={viewMoreData ? "grid" : "none"}
              >
                <LiveStatsCard
                  game={game}
                  eventType="goals"
                  eventTitle="Goals"
                />
                <LiveStatsCard
                  game={game}
                  eventType="shots"
                  eventTitle="Shots"
                />

                <LiveStatsCard
                  game={game}
                  eventType="penalties"
                  eventTitle="Penalties"
                />

                {/* <LiveStatsCard
                  game={game}
                  eventType="BLOCKED_SHOT"
                  eventTitle="Blocked Shots"
                />


                <LiveStatsCard
                  game={game}
                  eventType="FACEOFF"
                  eventTitle="Faceoffs"
                />

                <LiveStatsCard
                  game={game}
                  eventType="MISSED_SHOT"
                  eventTitle="Missed Shots"
                />

                <LiveStatsCard
                  game={game}
                  eventType="STOP"
                  eventTitle="Stoppage"
                />

                <LiveStatsCard
                  game={game}
                  eventType="TAKEAWAY"
                  eventTitle="Takeaways"
                />

                <LiveStatsCard game={game} eventType="HIT" eventTitle="Hits" />

                <LiveStatsCard
                  game={game}
                  eventType="GIVEAWAY"
                  eventTitle="Giveaways"
                /> */}
              </Grid>
            </Box>
          ))}
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default ScheduleGrid
