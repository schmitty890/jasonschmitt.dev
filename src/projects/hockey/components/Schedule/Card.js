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

const Card = props => {
  return (
    <ScheduleConsumer>
      {({ schedule, viewMoreData }) => (
        <Box
          w={{ base: "100%", md: "50%" }}
          display={{ base: "block", md: "inline-block" }}
          border="1px"
          borderRadius="5px"
          // m="2"
          p="2"
        >
          <Image
            src={props.game.teams[props.team].team.logo}
            alt={props.game.teams[props.team].team.logoAlt}
            loading="eager"
            h="50px"
            w="100%"
            fallbackSrc={<SkeletonCircle size="12" />}
            bg={props.game.teams[props.team].team.logoBgColor}
            p="2"
          />
          <Box>{props.game.teams[props.team].team.name}</Box>
          {viewMoreData ? (
            <Box>
              <Box>
                {props.game.liveData.liveData.linescore.teams.away
                  .powerPlay ? null : (
                  <Text fontSize="xs">
                    Coach&nbsp;
                    {
                      props.game.liveData.liveData.boxscore.teams.away
                        .coaches[0].person.fullName
                    }
                  </Text>
                )}
              </Box>
            </Box>
          ) : null}
          {viewMoreData ? (
            <Box>
              <Text fontSize="xs">
                {props.game.teams[props.team].leagueRecord.wins}-
                {props.game.teams[props.team].leagueRecord.losses}-
                {props.game.teams[props.team].leagueRecord.ot}
              </Text>
            </Box>
          ) : null}

          <Box>
            <Text fontSize="xs">
              {props.game.liveData.liveData.linescore.teams[props.team]
                .powerPlay ? (
                <Badge colorScheme="red">On Power Play</Badge>
              ) : null}
            </Text>
          </Box>

          <Box>
            {viewMoreData ? (
              <Text display="inline-block">Goals &nbsp;</Text>
            ) : null}
            <Text display="inline-block" fontWeight="extrabold">
              {props.game.teams[props.team].score}
            </Text>
          </Box>
          {viewMoreData ? (
            <Box>
              <Box>
                <Text display="inline-block">Shots &nbsp;</Text>

                <Text display="inline-block" fontWeight="extrabold">
                  {
                    props.game.liveData.liveData.boxscore.teams[props.team]
                      .teamStats.teamSkaterStats.shots
                  }
                </Text>
              </Box>
              <Box>
                <Text display="inline-block">Faceoff % &nbsp;</Text>

                <Text display="inline-block" fontWeight="extrabold">
                  {
                    props.game.liveData.liveData.boxscore.teams[props.team]
                      .teamStats.teamSkaterStats.faceOffWinPercentage
                  }
                </Text>
              </Box>
              <Box>
                <Text display="inline-block">Hits &nbsp;</Text>

                <Text display="inline-block" fontWeight="extrabold">
                  {
                    props.game.liveData.liveData.boxscore.teams[props.team]
                      .teamStats.teamSkaterStats.hits
                  }
                </Text>
              </Box>
              <Box>
                <Text display="inline-block">PIM &nbsp;</Text>

                <Text display="inline-block" fontWeight="extrabold">
                  {
                    props.game.liveData.liveData.boxscore.teams[props.team]
                      .teamStats.teamSkaterStats.pim
                  }
                </Text>
              </Box>
              <Box>
                <Text display="inline-block">PP% &nbsp;</Text>

                <Text display="inline-block" fontWeight="extrabold">
                  {
                    props.game.liveData.liveData.boxscore.teams[props.team]
                      .teamStats.teamSkaterStats.powerPlayPercentage
                  }
                </Text>
              </Box>
              {props.game.status.detailedState == "Final" ? null : (
                <Box>
                  <Grid>
                    {/* <Box>
                              {props.game.teams[props.team].team.players ? (
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
                                    {props.game.teams[props.team].team.players.map(
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
                              {props.game.teams[props.team].team.goalies ? (
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
                                    {props.game.teams[props.team].team.goalies.map(
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
                    {props.game.teams[props.team].team.onIcePlayers ? (
                      <Box>
                        <Grid
                          templateColumns={{
                            base: "repeat(1, 1fr)",
                          }}
                        >
                          <Box>On Ice</Box>
                        </Grid>
                        {props.game.teams[props.team].team.onIcePlayers ? (
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
                              {props.game.teams[
                                props.team
                              ].team.onIcePlayers.map((player, index) => (
                                <Tr key={index}>
                                  <Td>{player.data.people[0].primaryNumber}</Td>
                                  <Td>
                                    {player.data.people[0].fullName}
                                    {player.data.people[0].alternateCaptain ? (
                                      <Badge colorScheme="green">A</Badge>
                                    ) : null}
                                    {player.data.people[0].captain ? (
                                      <Badge colorScheme="green">C</Badge>
                                    ) : null}
                                    {player.data.people[0].rookie ? (
                                      <Badge colorScheme="blue">Rookie</Badge>
                                    ) : null}
                                  </Td>
                                  <Td
                                    display={{
                                      base: "none",
                                      lg: "table-cell",
                                    }}
                                  >
                                    {
                                      player.data.people[0].primaryPosition
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
                                    {player.shiftDuration <= 50 ? (
                                      <Progress
                                        value={player.shiftDuration}
                                        size="xs"
                                        colorScheme="green"
                                      />
                                    ) : player.shiftDuration <= 80 ? (
                                      <Progress
                                        value={player.shiftDuration}
                                        size="xs"
                                        colorScheme="yellow"
                                      />
                                    ) : (
                                      <Progress
                                        value={player.shiftDuration}
                                        size="xs"
                                        colorScheme="red"
                                      />
                                    )}
                                  </Td>
                                </Tr>
                              ))}
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
      )}
    </ScheduleConsumer>
  )
}

export default Card
