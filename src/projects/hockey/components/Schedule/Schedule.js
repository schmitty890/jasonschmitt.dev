import React from "react"
import {
  Box,
  GridItem,
  Flex,
  Avatar,
  Text,
  Badge,
  Heading,
  Button,
  Grid,
  SimpleGrid,
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
          // <Grid
          //   templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          //   gap={6}
          // >
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
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      display={{ base: "block", md: "inline-block" }}
                      border="1px"
                    >
                      <Box>{game.teams.away.team.name}</Box>
                    </Box>
                    <Box
                      w={{ base: "100%", md: "50%" }}
                      display={{ base: "block", md: "inline-block" }}
                      border="1px"
                    >
                      <Box>{game.teams.home.team.name}</Box>
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
