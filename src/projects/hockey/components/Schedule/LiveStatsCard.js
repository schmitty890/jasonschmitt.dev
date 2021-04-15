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
} from "@chakra-ui/react"
import { ScheduleConsumer } from "../../contexts/ScheduleContext"

const LiveStatsCard = props => {
  return (
    <ScheduleConsumer>
      {({ schedule, viewMoreData }) => (
        <Grid>
          {viewMoreData ? (
            <Box border="1px solid" borderRadius="5" p="2">
              <Text fontWeight="extrabold">{props.eventTitle}</Text>
              <Box>
                {props.game.liveData.liveData.plays.allPlays ? (
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {props.game.liveData.liveData.plays.allPlays.map(
                        (play, index) => (
                          <Tr key={index}>
                            {play.result.eventTypeId == props.eventType ? (
                              <Td>{play.result.description}</Td>
                            ) : null}
                          </Tr>
                        )
                      )}
                    </Tbody>
                  </Table>
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default LiveStatsCard
