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
import {
  ScheduleProvider,
  ScheduleConsumer,
} from "../../contexts/ScheduleContext"

const Header = () => {
  return (
    <ScheduleConsumer>
      {({ toggleMoreData }) => (
        <Grid>
          <Box>
            <Box align="center">
              <Image
                src="../../../images/projects/hockey/nhl.svg"
                alt="nhl"
                h="50"
                loading="eager"
              />
            </Box>
          </Box>
          <Box align="right" p="4">
            <Text>
              View more data &nbsp;
              <Switch
                size="lg"
                colorScheme="red"
                name="canEdit"
                onChange={toggleMoreData}
              />
            </Text>
          </Box>
        </Grid>
      )}
    </ScheduleConsumer>
  )
}

export default Header
