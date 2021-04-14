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

const GameCenter = props => {
  return (
    <ScheduleConsumer>
      {({ schedule, viewMoreData }) => (
        <Grid>
          {viewMoreData ? (
            <Box>
              <Box>
                {props.game.contentData.highlights.gameCenter.items ? (
                  <Box>
                    <Text>GameCenter</Text>
                    {props.game.contentData.highlights.gameCenter.items
                      .reverse()
                      .map((item, index) => (
                        <Box key={index}>
                          <Text>
                            {item.title}: {item.date}
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

export default GameCenter
