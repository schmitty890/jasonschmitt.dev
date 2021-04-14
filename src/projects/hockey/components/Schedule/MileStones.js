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
              {props.game.contentData.media.milestones.items ? (
                <Box>
                  <Text>Milestones</Text>
                  {props.game.contentData.media.milestones.items
                    .reverse()
                    .map((milestone, index) => (
                      <Grid templateColumns="repeat(2, 1fr)" mb="2" key={index}>
                        <Box border="1px solid blue" align="left">
                          <Text>
                            {milestone.description}: {milestone.timeAbsolute}
                          </Text>
                          {milestone.highlight.image ? (
                            <Box align="right">
                              <Image
                                w="50%"
                                src={
                                  milestone.highlight.image.cuts["568x320"].src
                                }
                                alt={milestone.highlight.description}
                              />
                            </Box>
                          ) : null}

                          {/* {milestone.highlight.playbacks ? (
                            <ReactPlayer
                              url={milestone.highlight.playbacks[0].url}
                            />
                          ) : (
                            <Text>no playback</Text>
                          )} */}
                        </Box>
                      </Grid>
                    ))}
                </Box>
              ) : null}
            </Box>
          ) : null}
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default MileStones
