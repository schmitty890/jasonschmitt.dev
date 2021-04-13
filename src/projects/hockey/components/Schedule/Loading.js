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

const Loading = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
      }}
      gap={6}
    >
      <Box w="100%" align="center" p="4">
        <Spinner size="xl" color="red.500" />
      </Box>
    </Grid>
  )
}

export default Loading
