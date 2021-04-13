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
import Header from "./Header"
import Loading from "./Loading"
import {
  ScheduleProvider,
  ScheduleConsumer,
} from "../../contexts/ScheduleContext"

const Schedule = () => {
  return (
    <ScheduleProvider>
      <ScheduleConsumer>
        {({
          schedule,
          loading,
          liveDataLoading,
          toggleMoreData,
          viewMoreData,
        }) => (
          <Box>
            {/* START TOP SECTION */}
            <Header />
            {/* END TOP SECTION */}

            {loading ? (
              /* START LOADING SCREEN  */
              <Loading />
            ) : (
              /* END LOADING SCREEN  */
              /* START MAIN GRID  */
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
                    {liveDataLoading ? null : (
                      <Grid templateColumns="repeat(2, 1fr)">
                        {game.liveData.liveData.linescore
                          .currentPeriodOrdinal ? (
                          <Box align="left">
                            {
                              game.liveData.liveData.linescore
                                .currentPeriodOrdinal
                            }
                            &nbsp;
                            {
                              game.liveData.liveData.linescore
                                .currentPeriodTimeRemaining
                            }
                          </Box>
                        ) : null}
                        {game.liveData.liveData.linescore.intermissionInfo
                          .inIntermission ? (
                          <Box align="right">
                            <Badge colorScheme="yellow">Intermission</Badge>
                          </Box>
                        ) : null}
                      </Grid>
                    )}
                    {/* END INDIVIDUAL GAME TOP SECTION */}

                    {/* START INDIVIDUAL GAME 2ND TOP SECTION */}
                    <Grid templateColumns="repeat(2, 1fr)" mb="2">
                      {game.status.detailedState == "Final" ? (
                        <Box align="left">
                          <Badge colorScheme="red">
                            {game.status.detailedState}
                          </Badge>
                        </Box>
                      ) : game.status.detailedState == "Game Over" ? (
                        <Box align="left">
                          <Badge colorScheme="red">
                            {game.status.detailedState}
                          </Badge>
                        </Box>
                      ) : game.status.detailedState == "Scheduled" ? (
                        <Box align="left">
                          <Badge colorScheme="yellow">
                            {game.status.detailedState}
                          </Badge>
                        </Box>
                      ) : game.status.detailedState == "Postponed" ? (
                        <Box align="left">
                          <Badge colorScheme="yellow">
                            {game.status.detailedState}
                          </Badge>
                        </Box>
                      ) : game.status.detailedState == "In Progress" ? (
                        <Box align="left">
                          <Badge colorScheme="green">
                            {game.status.detailedState}
                          </Badge>
                        </Box>
                      ) : game.status.detailedState == "Pre-Game" ? (
                        <Box align="left">
                          <Badge colorScheme="yellow">
                            {game.status.detailedState}
                          </Badge>
                        </Box>
                      ) : game.status.detailedState ==
                        "In Progress - Critical" ? (
                        <Box align="left">
                          <Badge colorScheme="red">
                            {game.status.detailedState}
                          </Badge>
                        </Box>
                      ) : game.status.detailedState == "Scheduled" ? (
                        <Box align="left">
                          <Badge colorScheme="green">
                            {game.status.detailedState}
                          </Badge>
                        </Box>
                      ) : (
                        <Box align="left">
                          <Badge colorScheme="red">Status unknown</Badge>
                        </Box>
                      )}

                      <Box align="right">Start time: {game.gameDate}</Box>
                    </Grid>
                    {/* END INDIVIDUAL GAME 2ND TOP SECTION */}

                    {/* START GAME SECTION */}
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      display={{ base: "block", md: "inline-block" }}
                      border="1px"
                      borderRadius="5px"
                      // m="2"
                      p="2"
                    >
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
                      {viewMoreData ? (
                        <Box>
                          {liveDataLoading ? null : (
                            <Box>
                              {game.liveData.liveData.linescore.teams.away
                                .powerPlay ? null : (
                                <Text fontSize="xs">
                                  Coach&nbsp;
                                  {
                                    game.liveData.liveData.boxscore.teams.away
                                      .coaches[0].person.fullName
                                  }
                                </Text>
                              )}
                            </Box>
                          )}
                        </Box>
                      ) : null}
                      {viewMoreData ? (
                        <Box>
                          <Text fontSize="xs">
                            {game.teams.away.leagueRecord.wins}-
                            {game.teams.away.leagueRecord.losses}-
                            {game.teams.away.leagueRecord.ot}
                          </Text>
                        </Box>
                      ) : null}

                      <Box>
                        {liveDataLoading ? null : (
                          <Text fontSize="xs">
                            {game.liveData.liveData.linescore.teams.away
                              .powerPlay ? (
                              <Badge colorScheme="red">On Power Play</Badge>
                            ) : null}
                          </Text>
                        )}
                      </Box>

                      <Box>
                        {viewMoreData ? (
                          <Text display="inline-block">Goals &nbsp;</Text>
                        ) : null}
                        <Text display="inline-block" fontWeight="extrabold">
                          {game.teams.away.score}
                        </Text>
                      </Box>
                      {viewMoreData ? (
                        <Box>
                          <Box>
                            <Text display="inline-block">Shots &nbsp;</Text>
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.away
                                    .teamStats.teamSkaterStats.shots
                                }
                              </Text>
                            )}
                          </Box>
                          <Box>
                            <Text display="inline-block">Faceoff % &nbsp;</Text>
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.away
                                    .teamStats.teamSkaterStats
                                    .faceOffWinPercentage
                                }
                              </Text>
                            )}
                          </Box>
                          <Box>
                            <Text display="inline-block">Hits &nbsp;</Text>
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.away
                                    .teamStats.teamSkaterStats.hits
                                }
                              </Text>
                            )}
                          </Box>
                          <Box>
                            <Text display="inline-block">PIM &nbsp;</Text>
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.away
                                    .teamStats.teamSkaterStats.pim
                                }
                              </Text>
                            )}
                          </Box>
                          <Box>
                            <Text display="inline-block">PP% &nbsp;</Text>
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.away
                                    .teamStats.teamSkaterStats
                                    .powerPlayPercentage
                                }
                              </Text>
                            )}
                          </Box>
                          {game.status.detailedState == "Final" ? null : (
                            <Box>
                              <Grid>
                                {/* <Box>
                              {game.teams.away.team.players ? (
                                <Table size="sm">
                                  <Thead>
                                    <Tr>
                                      <Th>#</Th>
                                      <Th>Name</Th>
                                      <Th>POS</Th>
                                      <Th>Age</Th>
                                    </Tr>
                                  </Thead>
                                  <Tbody>
                                    {game.teams.away.team.players.map(
                                      (player, index) => (
                                        <Tr key={index}>
                                          <Td>
                                            {
                                              player.data.people[0]
                                                .primaryNumber
                                            }
                                          </Td>
                                          <Td>
                                            {player.data.people[0].fullName}
                                            {player.data.people[0]
                                              .alternateCaptain ? (
                                              <Badge colorScheme="green">
                                                A
                                              </Badge>
                                            ) : null}
                                            {player.data.people[0].captain ? (
                                              <Badge colorScheme="green">
                                                C
                                              </Badge>
                                            ) : null}
                                            {player.data.people[0].rookie ? (
                                              <Badge colorScheme="blue">
                                                Rookie
                                              </Badge>
                                            ) : null}
                                          </Td>
                                          <Td>
                                            {
                                              player.data.people[0]
                                                .primaryPosition.abbreviation
                                            }
                                          </Td>
                                          <Td>
                                            {player.data.people[0].currentAge}
                                          </Td>
                                        </Tr>
                                      )
                                    )}
                                  </Tbody>
                                </Table>
                              ) : (
                                <Box>no players here</Box>
                              )}
                            </Box> */}

                                {/* <Box>
                              {game.teams.away.team.goalies ? (
                                <Table size="sm">
                                  <Thead>
                                    <Tr>
                                      <Th>#</Th>
                                      <Th>GOALIE Name</Th>
                                      <Th>POS</Th>
                                      <Th>Age</Th>
                                    </Tr>
                                  </Thead>
                                  <Tbody>
                                    {game.teams.away.team.goalies.map(
                                      (goalie, index) => (
                                        <Tr key={index}>
                                          <Td>
                                            {
                                              goalie.data.people[0]
                                                .primaryNumber
                                            }
                                          </Td>
                                          <Td>
                                            {goalie.data.people[0].fullName}
                                            {goalie.data.people[0]
                                              .alternateCaptain ? (
                                              <Badge colorScheme="green">
                                                A
                                              </Badge>
                                            ) : null}
                                            {goalie.data.people[0].captain ? (
                                              <Badge colorScheme="green">
                                                C
                                              </Badge>
                                            ) : null}
                                            {goalie.data.people[0].rookie ? (
                                              <Badge colorScheme="blue">
                                                Rookie
                                              </Badge>
                                            ) : null}
                                          </Td>
                                          <Td>
                                            {
                                              goalie.data.people[0]
                                                .primaryPosition.abbreviation
                                            }
                                          </Td>
                                          <Td>
                                            {goalie.data.people[0].currentAge}
                                          </Td>
                                        </Tr>
                                      )
                                    )}
                                  </Tbody>
                                </Table>
                              ) : (
                                <Box>no players here</Box>
                              )}
                            </Box> */}
                                {game.teams.away.team.onIcePlayers >= 1 ? (
                                  <Box>
                                    <Grid
                                      templateColumns={{
                                        base: "repeat(1, 1fr)",
                                      }}
                                    >
                                      <Box>On Ice</Box>
                                    </Grid>
                                    {game.teams.away.team.onIcePlayers ? (
                                      <Table size="sm">
                                        <Thead>
                                          <Tr>
                                            <Th>#</Th>
                                            <Th>Name</Th>
                                            <Th
                                              display={{
                                                base: "none",
                                                lg: "table-cell",
                                              }}
                                            >
                                              POS
                                            </Th>
                                            <Th>Stamina</Th>
                                            <Th>Shift length</Th>
                                          </Tr>
                                        </Thead>
                                        <Tbody>
                                          {game.teams.away.team.onIcePlayers.map(
                                            (player, index) => (
                                              <Tr key={index}>
                                                <Td>
                                                  {
                                                    player.data.people[0]
                                                      .primaryNumber
                                                  }
                                                </Td>
                                                <Td>
                                                  {
                                                    player.data.people[0]
                                                      .fullName
                                                  }
                                                  {player.data.people[0]
                                                    .alternateCaptain ? (
                                                    <Badge colorScheme="green">
                                                      A
                                                    </Badge>
                                                  ) : null}
                                                  {player.data.people[0]
                                                    .captain ? (
                                                    <Badge colorScheme="green">
                                                      C
                                                    </Badge>
                                                  ) : null}
                                                  {player.data.people[0]
                                                    .rookie ? (
                                                    <Badge colorScheme="blue">
                                                      Rookie
                                                    </Badge>
                                                  ) : null}
                                                </Td>
                                                <Td
                                                  display={{
                                                    base: "none",
                                                    lg: "table-cell",
                                                  }}
                                                >
                                                  {
                                                    player.data.people[0]
                                                      .primaryPosition
                                                      .abbreviation
                                                  }
                                                </Td>
                                                <Td>
                                                  {player.stamina > 70 ? (
                                                    <Progress
                                                      value={player.stamina}
                                                      size="xs"
                                                      colorScheme="green"
                                                    />
                                                  ) : player.stamina > 40 ? (
                                                    <Progress
                                                      value={player.stamina}
                                                      size="xs"
                                                      colorScheme="yellow"
                                                    />
                                                  ) : (
                                                    <Progress
                                                      value={player.stamina}
                                                      size="xs"
                                                      colorScheme="red"
                                                    />
                                                  )}
                                                </Td>
                                                <Td>
                                                  {player.shiftDuration <=
                                                  50 ? (
                                                    <Progress
                                                      value={
                                                        player.shiftDuration
                                                      }
                                                      size="xs"
                                                      colorScheme="green"
                                                    />
                                                  ) : player.shiftDuration <=
                                                    80 ? (
                                                    <Progress
                                                      value={
                                                        player.shiftDuration
                                                      }
                                                      size="xs"
                                                      colorScheme="yellow"
                                                    />
                                                  ) : (
                                                    <Progress
                                                      value={
                                                        player.shiftDuration
                                                      }
                                                      size="xs"
                                                      colorScheme="red"
                                                    />
                                                  )}
                                                </Td>
                                              </Tr>
                                            )
                                          )}
                                        </Tbody>
                                      </Table>
                                    ) : (
                                      <Box>Refreshing players</Box>
                                    )}
                                  </Box>
                                ) : null}
                              </Grid>
                            </Box>
                          )}
                        </Box>
                      ) : null}
                    </Box>
                    {/* END GAME SECTION */}
                    {/* START GAME SECTION */}
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      display={{ base: "block", md: "inline-block" }}
                      border="1px"
                      borderRadius="5px"
                      // m="2"
                      p="2"
                    >
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
                      {viewMoreData ? (
                        <Box>
                          {liveDataLoading ? null : (
                            <Box>
                              {game.liveData.liveData.linescore.teams.home
                                .powerPlay ? null : (
                                <Text fontSize="xs">
                                  Coach&nbsp;
                                  {
                                    game.liveData.liveData.boxscore.teams.home
                                      .coaches[0].person.fullName
                                  }
                                </Text>
                              )}
                            </Box>
                          )}
                        </Box>
                      ) : null}
                      {viewMoreData ? (
                        <Box>
                          <Text fontSize="xs">
                            {game.teams.home.leagueRecord.wins}-
                            {game.teams.home.leagueRecord.losses}-
                            {game.teams.home.leagueRecord.ot}
                          </Text>
                        </Box>
                      ) : null}

                      <Box>
                        {liveDataLoading ? null : (
                          <Text fontSize="xs">
                            {game.liveData.liveData.linescore.teams.home
                              .powerPlay ? (
                              <Badge colorScheme="red">On Power Play</Badge>
                            ) : null}
                          </Text>
                        )}
                      </Box>
                      <Box>
                        {viewMoreData ? (
                          <Text display="inline-block">Goals &nbsp;</Text>
                        ) : null}

                        <Text display="inline-block" fontWeight="extrabold">
                          {game.teams.home.score}
                        </Text>
                      </Box>
                      {viewMoreData ? (
                        <Box>
                          <Box>
                            <Text display="inline-block">Shots &nbsp;</Text>
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.home
                                    .teamStats.teamSkaterStats.shots
                                }
                              </Text>
                            )}
                          </Box>
                          <Box>
                            Faceoff % &nbsp;
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.home
                                    .teamStats.teamSkaterStats
                                    .faceOffWinPercentage
                                }
                              </Text>
                            )}
                          </Box>
                          <Box>
                            Hits &nbsp;
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.home
                                    .teamStats.teamSkaterStats.hits
                                }
                              </Text>
                            )}
                          </Box>
                          <Box>
                            PIM &nbsp;
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.home
                                    .teamStats.teamSkaterStats.pim
                                }
                              </Text>
                            )}
                          </Box>
                          <Box>
                            PP% &nbsp;
                            {liveDataLoading ? (
                              <Skeleton
                                height="20px"
                                width="20px"
                                display="inline-block"
                                position="relative"
                                top="3px"
                              />
                            ) : (
                              <Text
                                display="inline-block"
                                fontWeight="extrabold"
                              >
                                {
                                  game.liveData.liveData.boxscore.teams.home
                                    .teamStats.teamSkaterStats
                                    .powerPlayPercentage
                                }
                              </Text>
                            )}
                          </Box>
                          {game.status.detailedState == "Final" ? null : (
                            <Box>
                              <Grid>
                                {/* <Box>
                                {game.teams.home.team.players ? (
                                  <Table size="sm">
                                    <Thead>
                                      <Tr>
                                        <Th>#</Th>
                                        <Th>Name</Th>
                                        <Th>POS</Th>
                                        <Th>Age</Th>
                                      </Tr>
                                    </Thead>
                                    <Tbody>
                                      {game.teams.home.team.players.map(
                                        (player, index) => (
                                          <Tr key={index}>
                                            <Td>
                                              {
                                                player.data.people[0]
                                                  .primaryNumber
                                              }
                                            </Td>
                                            <Td>
                                              {player.data.people[0].fullName}
                                              {player.data.people[0]
                                                .alternateCaptain ? (
                                                <Badge colorScheme="green">
                                                  A
                                                </Badge>
                                              ) : null}
                                              {player.data.people[0].captain ? (
                                                <Badge colorScheme="green">
                                                  C
                                                </Badge>
                                              ) : null}
                                              {player.data.people[0].rookie ? (
                                                <Badge colorScheme="blue">
                                                  Rookie
                                                </Badge>
                                              ) : null}
                                            </Td>
                                            <Td>
                                              {
                                                player.data.people[0]
                                                  .primaryPosition.abbreviation
                                              }
                                            </Td>
                                            <Td>
                                              {player.data.people[0].currentAge}
                                            </Td>
                                          </Tr>
                                        )
                                      )}
                                    </Tbody>
                                  </Table>
                                ) : (
                                  <Box>no players here</Box>
                                )}
                              </Box> */}

                                {/* <Box>
                                {game.teams.home.team.goalies ? (
                                  <Table size="sm">
                                    <Thead>
                                      <Tr>
                                        <Th>#</Th>
                                        <Th>GOALIE Name</Th>
                                        <Th>POS</Th>
                                        <Th>Age</Th>
                                      </Tr>
                                    </Thead>
                                    <Tbody>
                                      {game.teams.home.team.goalies.map(
                                        (goalie, index) => (
                                          <Tr key={index}>
                                            <Td>
                                              {
                                                goalie.data.people[0]
                                                  .primaryNumber
                                              }
                                            </Td>
                                            <Td>
                                              {goalie.data.people[0].fullName}
                                              {goalie.data.people[0]
                                                .alternateCaptain ? (
                                                <Badge colorScheme="green">
                                                  A
                                                </Badge>
                                              ) : null}
                                              {goalie.data.people[0].captain ? (
                                                <Badge colorScheme="green">
                                                  C
                                                </Badge>
                                              ) : null}
                                              {goalie.data.people[0].rookie ? (
                                                <Badge colorScheme="blue">
                                                  Rookie
                                                </Badge>
                                              ) : null}
                                            </Td>
                                            <Td>
                                              {
                                                goalie.data.people[0]
                                                  .primaryPosition.abbreviation
                                              }
                                            </Td>
                                            <Td>
                                              {goalie.data.people[0].currentAge}
                                            </Td>
                                          </Tr>
                                        )
                                      )}
                                    </Tbody>
                                  </Table>
                                ) : (
                                  <Box>no players here</Box>
                                )}
                              </Box> */}
                                {game.teams.home.team.onIcePlayers >= 1 ? (
                                  <Box>
                                    <Grid
                                      templateColumns={{
                                        base: "repeat(1, 1fr)",
                                      }}
                                    >
                                      <Box>On Ice</Box>
                                    </Grid>
                                    {game.teams.home.team.onIcePlayers ? (
                                      <Table size="sm">
                                        <Thead>
                                          <Tr>
                                            <Th>#</Th>
                                            <Th>Name</Th>
                                            <Th
                                              display={{
                                                base: "none",
                                                lg: "table-cell",
                                              }}
                                            >
                                              POS
                                            </Th>
                                            <Th>Stamina</Th>
                                            <Th>Shift length</Th>
                                          </Tr>
                                        </Thead>
                                        <Tbody>
                                          {game.teams.home.team.onIcePlayers.map(
                                            (player, index) => (
                                              <Tr key={index}>
                                                <Td>
                                                  {
                                                    player.data.people[0]
                                                      .primaryNumber
                                                  }
                                                </Td>
                                                <Td>
                                                  {
                                                    player.data.people[0]
                                                      .fullName
                                                  }
                                                  {player.data.people[0]
                                                    .alternateCaptain ? (
                                                    <Badge colorScheme="green">
                                                      A
                                                    </Badge>
                                                  ) : null}
                                                  {player.data.people[0]
                                                    .captain ? (
                                                    <Badge colorScheme="green">
                                                      C
                                                    </Badge>
                                                  ) : null}
                                                  {player.data.people[0]
                                                    .rookie ? (
                                                    <Badge colorScheme="blue">
                                                      Rookie
                                                    </Badge>
                                                  ) : null}
                                                </Td>
                                                <Td
                                                  display={{
                                                    base: "none",
                                                    lg: "table-cell",
                                                  }}
                                                >
                                                  {
                                                    player.data.people[0]
                                                      .primaryPosition
                                                      .abbreviation
                                                  }
                                                </Td>
                                                <Td>
                                                  {player.stamina > 70 ? (
                                                    <Progress
                                                      value={player.stamina}
                                                      size="xs"
                                                      colorScheme="green"
                                                    />
                                                  ) : player.stamina > 40 ? (
                                                    <Progress
                                                      value={player.stamina}
                                                      size="xs"
                                                      colorScheme="yellow"
                                                    />
                                                  ) : (
                                                    <Progress
                                                      value={player.stamina}
                                                      size="xs"
                                                      colorScheme="red"
                                                    />
                                                  )}
                                                </Td>

                                                <Td>
                                                  {player.shiftDuration <=
                                                  50 ? (
                                                    <Progress
                                                      value={
                                                        player.shiftDuration
                                                      }
                                                      size="xs"
                                                      colorScheme="green"
                                                    />
                                                  ) : player.shiftDuration <=
                                                    80 ? (
                                                    <Progress
                                                      value={
                                                        player.shiftDuration
                                                      }
                                                      size="xs"
                                                      colorScheme="yellow"
                                                    />
                                                  ) : (
                                                    <Progress
                                                      value={
                                                        player.shiftDuration
                                                      }
                                                      size="xs"
                                                      colorScheme="red"
                                                    />
                                                  )}
                                                </Td>
                                              </Tr>
                                            )
                                          )}
                                        </Tbody>
                                      </Table>
                                    ) : (
                                      <Box>Refreshing players</Box>
                                    )}
                                  </Box>
                                ) : null}
                              </Grid>
                            </Box>
                          )}
                        </Box>
                      ) : null}
                    </Box>
                    {/* START GAME SECTION */}

                    {/* START LIVE DATA SECTION */}
                    {viewMoreData ? (
                      <Box>
                        {liveDataLoading ? (
                          <Skeleton
                            height="20px"
                            width="100%"
                            display="inline-block"
                            position="relative"
                            top="3px"
                          />
                        ) : (
                          <Box>
                            {game.liveData.liveData.plays.currentPlay ? (
                              <Text>
                                {
                                  game.liveData.liveData.plays.currentPlay
                                    .result.description
                                }
                              </Text>
                            ) : null}
                          </Box>
                        )}
                      </Box>
                    ) : null}
                    {/* END LIVE DATA SECTION */}
                  </Box>
                ))}
              </Grid>
              /* END MAIN GRID  */
            )}
          </Box>
        )}
      </ScheduleConsumer>
    </ScheduleProvider>
  )
}

export default Schedule
