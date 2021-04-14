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

const MileStones = props => {
  return (
    <ScheduleConsumer>
      {({ schedule, viewMoreData }) => (
        <Grid>
          {viewMoreData ? (
            <Box>
              <Box>
                {props.game.contentData.media.milestones.items ? (
                  <Box>
                    {props.game.contentData.media.milestones.items
                      .slice(0, 3)
                      .reverse()
                      .map((milestone, index) => (
                        <Box key={index}>
                          <Text>
                            {milestone.description}: {milestone.timeAbsolute}
                          </Text>
                        </Box>
                      ))}
                  </Box>
                ) : null}
              </Box>
            </Box>
          ) : null}
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default MileStones
