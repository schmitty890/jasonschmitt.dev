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
              {props.game.contentData.highlights.gameCenter.items ? (
                <Grid templateColumns="repeat(1, 1fr)">
                  {props.game.contentData.highlights.gameCenter.items
                    .reverse()
                    .map((item, index) => (
                      <Box key={index}>
                        <Text p="2" bg="gray.100" mb="1px">
                          {item.title} {item.date}
                        </Text>
                      </Box>
                    ))}
                </Grid>
              ) : null}
            </Box>
          ) : null}
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default GameCenter
