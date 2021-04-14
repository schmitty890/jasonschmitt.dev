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
import Header from "./Header"
import Loading from "./Loading"
import ScheduleGrid from "./ScheduleGrid"
import {
  ScheduleProvider,
  ScheduleConsumer,
} from "../../contexts/ScheduleContext"

const Schedule = () => {
  return (
    <ScheduleProvider>
      <ScheduleConsumer>
        {({ schedule, loading, toggleMoreData, viewMoreData }) => (
          <Box>
            {/* START TOP SECTION */}
            <Header />
            {/* END TOP SECTION */}

            {loading ? (
              /* START LOADING SCREEN  */
              <Loading />
            ) : (
              /* END LOADING SCREEN  */
              /* START MAIN GRID  */
              <ScheduleGrid />
              /* END MAIN GRID  */
            )}
          </Box>
        )}
      </ScheduleConsumer>
    </ScheduleProvider>
  )
}

export default Schedule
