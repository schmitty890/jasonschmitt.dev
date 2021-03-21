import React, { useState } from "react"
import { getTestRoute, postTestRoute } from "../../api/test"
import { useFormik } from "formik"

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
} from "@chakra-ui/react"

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [msgSent, setMsgSent] = useState(false)

  function validate(values) {
    const errors = {}
    if (!values.yourName) {
      errors.yourName = "Required"
    }

    if (!values.yourEmail) {
      errors.yourEmail = "Required"
    }
    if (!values.yourMessage) {
      errors.yourMessage = "Say something"
    }
    return errors
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values, // use this if you want controlled components
    errors,
  } = useFormik({
    initialValues: {
      yourName: "",
      yourEmail: "",
      yourMessage: "",
    },
    validate,
    onSubmit: values => {
      setIsLoading(true)
      // make post request here
      // setTimeout(() => {
      // console.log(values)
      // getTestRoute() // get route
      postTestRoute(values) // post route
      setIsLoading(false)
      setMsgSent(true)
      errors.successMessage = "Your message has been sent :)"
      // }, 2000)
      // values = {"yourName":"ramen","yourEmail":"mountains"}
    },
  })

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={0.5}>
      <GridItem rowSpan={1} colSpan={{ base: 12 }} bg={{ base: "white" }} p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel mt={4} htmlFor="yourName">
              Your name
            </FormLabel>
            <Input
              type="text"
              name="yourName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.yourName && errors.yourName ? (
              <Text color="red.500">{errors.yourName}</Text>
            ) : null}
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={4} htmlFor="yourEmail">
              Your email:
            </FormLabel>
            <Input
              type="text"
              name="yourEmail"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.yourEmail && errors.yourEmail ? (
              <Text color="red.500">{errors.yourEmail}</Text>
            ) : null}
          </FormControl>

          <FormControl isRequired>
            <FormLabel mt={4} htmlFor="yourMessage">
              Your message
            </FormLabel>
            <Textarea
              name="yourMessage"
              onChange={handleChange}
              onBlur={handleBlur}
              mt={4}
              placeholder="Contact me with any questions or opportunities, or just say whats up!"
            />
            {touched.yourMessage && errors.yourMessage ? (
              <Text color="red.500">{errors.yourMessage}</Text>
            ) : null}
          </FormControl>

          <Button mt={4} colorScheme="teal" isLoading={isLoading} type="submit">
            submit
          </Button>
          {msgSent ? (
            <Alert mt={4} status="success">
              <AlertIcon />
              Your message has been sent :)
            </Alert>
          ) : null}
        </form>
      </GridItem>
    </Grid>
  )
}

export default ContactForm