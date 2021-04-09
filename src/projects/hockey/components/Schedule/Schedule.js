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
} from "@chakra-ui/react"
import {
  ScheduleProvider,
  ScheduleConsumer,
} from "../../contexts/ScheduleContext"

const Schedule = () => {
  return (
    <ScheduleProvider>
      <ScheduleConsumer>
        {({ schedule, loading }) => (
          <Box>
            {loading ? (
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                gap={6}
              >
                <Box w="100%" h="10" bg="blue.500">
                  Loading
                </Box>
              </Grid>
            ) : (
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                gap={6}
              >
                {schedule.dates[0].games.map(game => (
                  <Box
                    w="100%"
                    bg="blue.500"
                    border="1px"
                    align="center"
                    key={game.gamePk}
                  >
                    {game.status.detailedState == "Final" ? (
                      <Box>
                        <Badge colorScheme="red">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : game.status.detailedState == "Postponed" ??
                      game.status.detailedState == "Scheduled" ? (
                      <Box>
                        <Badge colorScheme="yellow">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : game.status.detailedState == "In progress" ? (
                      <Box>
                        <Badge colorScheme="green">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : game.status.detailedState == "Scheduled" ? (
                      <Box>
                        <Badge colorScheme="green">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : (
                      <Box>
                        <Badge colorScheme="red">Status unknown</Badge>
                      </Box>
                    )}

                    <Box>Start time: {game.gameDate}</Box>

                    <Box
                      w={{ base: "100%", md: "50%" }}
                      display={{ base: "block", md: "inline-block" }}
                      border="1px"
                    >
                      {/* <Avatar
                        src={game.teams.away.team.logo}
                        alt={game.teams.away.team.logoAlt}
                        loading="eager"
                        icon={<SkeletonCircle size="12" />}
                      /> */}
                      <Image
                        src={game.teams.away.team.logo}
                        alt={game.teams.away.team.logoAlt}
                        h="50px"
                      />
                      <Box>{game.teams.away.team.name}</Box>
                      <Box>
                        <Text fontSize="xs">
                          {game.teams.away.leagueRecord.wins}-
                          {game.teams.away.leagueRecord.losses}-
                          {game.teams.away.leagueRecord.ot}
                        </Text>
                      </Box>
                      <Box>{game.teams.away.score}</Box>
                    </Box>
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      display={{ base: "block", md: "inline-block" }}
                      border="1px"
                    >
                      {/* <Avatar
                        src={game.teams.home.team.logo}
                        alt={game.teams.home.team.logoAlt}
                        loading="eager"
                        icon={<SkeletonCircle size="12" />}
                      /> */}
                      <Image
                        src={game.teams.home.team.logo}
                        alt={game.teams.home.team.logoAlt}
                        h="50px"
                      />
                      <Box>{game.teams.home.team.name}</Box>
                      <Box>
                        <Text fontSize="xs">
                          {game.teams.home.leagueRecord.wins}-
                          {game.teams.home.leagueRecord.losses}-
                          {game.teams.home.leagueRecord.ot}
                        </Text>
                      </Box>
                      <Box>{game.teams.home.score}</Box>
                    </Box>
                  </Box>
                ))}
              </Grid>
            )}
          </Box>
        )}
      </ScheduleConsumer>
    </ScheduleProvider>
  )
}

export default Schedule