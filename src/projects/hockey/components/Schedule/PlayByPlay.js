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
  Divider,
  GridItem,
} from "@chakra-ui/react"
import { ScheduleConsumer } from "../../contexts/ScheduleContext"
import { GiWhistle } from "react-icons/gi"

const PlayByPlay = props => {
  return (
    <ScheduleConsumer>
      {({ schedule, viewMoreData }) => (
        <Grid>
          {viewMoreData ? (
            <Box>
              {props.game.contentData.highlights.gameCenter.items ? (
                <Grid templateColumns="repeat(1, 1fr)">
                  {props.game.liveData.liveData.plays.allPlays.map(
                    (play, index) => (
                      <Grid
                        key={index}
                        templateColumns="repeat(1, 1fr)"
                        border="1px solid"
                      >
                        {play.players ? (
                          <Grid
                            templateColumns="repeat(3, 1fr)"
                            border="1px solid"
                          >
                            <GridItem bg="gray.100" colSpan={1}>
                              <Stack
                                direction="row"
                                h="100px"
                                border="black"
                                p={4}
                              >
                                <Divider orientation="vertical" />
                                <Box align="left">
                                  <Image
                                    src={play.team.logo}
                                    alt={play.team.logoAlt}
                                    loading="eager"
                                    h="40px"
                                    w="40px"
                                    // fallbackSrc={<SkeletonCircle size="12" />}
                                    // bg={props.game.teams[props.team].team.logoBgColor}
                                  />
                                </Box>
                                <Box align="right">
                                  <Text color={play.team.logoBgColor}>
                                    {play.team.triCode}
                                  </Text>
                                </Box>
                                <Box>
                                  <Text>{play.about.dateTime}</Text>
                                  <Badge
                                    colorScheme={play.result.badgeColorScheme}
                                    variant={play.result.badgeVariant}
                                  >
                                    {play.result.event}
                                  </Badge>
                                </Box>
                              </Stack>
                            </GridItem>
                            <GridItem bg="gray.100" colSpan={2}>
                              <Stack direction="row" h="100px" p={4}>
                                <Text>{play.result.description}</Text>
                              </Stack>
                            </GridItem>
                          </Grid>
                        ) : (
                          <Grid
                            templateColumns="repeat(1, 1fr)"
                            border="1px solid"
                          >
                            <Box bg="gray.100">
                              <Stack direction="row" p={4}>
                                <Divider orientation="vertical" />
                                <GiWhistle />
                                <Text display="inline-block">
                                  {play.result.description}
                                </Text>
                              </Stack>
                            </Box>
                          </Grid>
                        )}
                      </Grid>
                    )
                  )}
                </Grid>
              ) : null}
            </Box>
          ) : null}
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default PlayByPlay
