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
                    bg="gray.300"
                    // border="1px"

                    borderRadius="5"
                    mt="2"
                    p="2"
                    align="center"
                    key={game.gamePk}
                  >
                    {game.status.detailedState == "Final" ? (
                      <Box display="inline-block" float="left" p="2">
                        <Badge colorScheme="red">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : game.status.detailedState == "Postponed" ??
                      game.status.detailedState == "Scheduled" ? (
                      <Box display="inline-block" float="left" p="2">
                        <Badge colorScheme="yellow">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : game.status.detailedState == "In Progress" ? (
                      <Box display="inline-block" float="left" p="2">
                        <Badge colorScheme="green">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : game.status.detailedState == "Pre-Game" ? (
                      <Box display="inline-block" float="left" p="2">
                        <Badge colorScheme="yellow">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : game.status.detailedState ==
                      "In Progress - Critical" ? (
                      <Box display="inline-block" float="left" p="2">
                        <Badge colorScheme="red">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : game.status.detailedState == "Scheduled" ? (
                      <Box display="inline-block" float="left" p="2">
                        <Badge colorScheme="green">
                          {game.status.detailedState}
                        </Badge>
                      </Box>
                    ) : (
                      <Box display="inline-block" float="left" p="2">
                        <Badge colorScheme="red">Status unknown</Badge>
                      </Box>
                    )}

                    <Box display="inline-block" float="right" p="2">
                      Start time: {game.gameDate}
                    </Box>
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      display={{ base: "block", md: "inline-block" }}
                      // border="1px"
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
                        loading="eager"
                        h="50px"
                        w="100%"
                        fallbackSrc={<SkeletonCircle size="12" />}
                        bg={game.teams.away.team.logoBgColor}
                        p="2"
                      />
                      <Box>{game.teams.away.team.name}</Box>
                      <Box>
                        <Text fontSize="xs">
                          {game.teams.away.leagueRecord.wins}-
                          {game.teams.away.leagueRecord.losses}-
                          {game.teams.away.leagueRecord.ot}
                        </Text>
                      </Box>

                      <Box>
                        <Text display="inline-block">Goals &nbsp; </Text>
                        <Text display="inline-block" fontWeight="extrabold">
                          {game.teams.away.score}
                        </Text>
                      </Box>
                      <Box>
                        <Text display="inline-block">Shots &nbsp;</Text>
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.shots
                          }
                        </Text>
                      </Box>
                      <Box>
                        <Text display="inline-block">Faceoff % &nbsp;</Text>
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.faceOffWinPercentage
                          }
                        </Text>
                      </Box>
                      <Box>
                        <Text display="inline-block">Hits &nbsp;</Text>
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.hits
                          }
                        </Text>
                      </Box>
                      <Box>
                        <Text display="inline-block">PIM &nbsp;</Text>
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.pim
                          }
                        </Text>
                      </Box>
                      <Box>
                        <Text display="inline-block">PP% &nbsp;</Text>
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.powerPlayPercentage
                          }
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      display={{ base: "block", md: "inline-block" }}
                      // border="1px"
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
                        loading="eager"
                        h="50px"
                        w="100%"
                        bg={game.teams.home.team.logoBgColor}
                        p="2"
                      />
                      <Box>{game.teams.home.team.name}</Box>
                      <Box>
                        <Text fontSize="xs">
                          {game.teams.home.leagueRecord.wins}-
                          {game.teams.home.leagueRecord.losses}-
                          {game.teams.home.leagueRecord.ot}
                        </Text>
                      </Box>
                      <Box>
                        <Text display="inline-block">Goals &nbsp;</Text>
                        <Text display="inline-block" fontWeight="extrabold">
                          {game.teams.home.score}
                        </Text>
                      </Box>
                      <Box>
                        <Text display="inline-block">Shots &nbsp;</Text>
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.shots
                          }
                        </Text>
                      </Box>
                      <Box>
                        Faceoff % &nbsp;
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.faceOffWinPercentage
                          }
                        </Text>
                      </Box>
                      <Box>
                        Hits &nbsp;
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.hits
                          }
                        </Text>
                      </Box>
                      <Box>
                        PIM &nbsp;
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.pim
                          }
                        </Text>
                      </Box>
                      <Box>
                        PP% &nbsp;
                        <Text display="inline-block" fontWeight="extrabold">
                          {
                            game.liveData.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.powerPlayPercentage
                          }
                        </Text>
                      </Box>
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
