import React, { useState } from "react"
import { postZipCode } from "../../api/weatherAPI"
import { useFormik } from "formik"
import { WeatherConsumer } from "../../contexts/WeatherContext"

import {
  FormLabel,
  Grid,
  Input,
  GridItem,
  Textarea,
  Button,
  Text,
  FormControl,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react"

const ZipCodeForm = () => {
  const toast = useToast()

  return (
    <WeatherConsumer>
      {({ addZipCode }) => (
        <Grid templateColumns="repeat(12, 1fr)" gap={0.5}>
          <GridItem
            rowSpan={1}
            colSpan={{ base: 12 }}
            bg={{ base: "white" }}
            p={4}
          >
            <form>
              <Input
                id="zip"
                placeholder="zip code"
                // onChange={getSearchResults}
              />

              <Button
                mt={4}
                colorScheme="linkedin"
                onClick={e =>
                  addZipCode(e).then(res => {
                    console.log(res)
                    // toast({
                    //   title: `${res.msg}`,
                    //   status: res.status,
                    //   isClosable: true,
                    //   duration: 3000,
                    // })
                  })
                }
              >
                Submit new zipcode!
              </Button>
              {/* {msgSent ? (
            <Alert mt={4} status="success">
              <AlertIcon />
              Your message has been sent :)
            </Alert>
          ) : null} */}
            </form>
          </GridItem>
        </Grid>
      )}
    </WeatherConsumer>
  )
}

export default ZipCodeForm
