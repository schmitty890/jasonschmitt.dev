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
import ReactPlayer from "react-player/lazy"

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
                    <Text>Milestones</Text>
                    {props.game.contentData.media.milestones.items
                      .reverse()
                      .map((milestone, index) => (
                        <Box key={index}>
                          <Text>
                            {milestone.description}: {milestone.timeAbsolute}
                          </Text>
                          {milestone.highlight.image ? (
                            <Image
                              w="50%"
                              src={
                                milestone.highlight.image.cuts["568x320"].src
                              }
                              alt={milestone.highlight.description}
                            />
                          ) : null}

                          {/* {milestone.highlight.playbacks ? (
                            <ReactPlayer
                              url={milestone.highlight.playbacks[0].url}
                            />
                          ) : (
                            <Text>no playback</Text>
                          )} */}
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
