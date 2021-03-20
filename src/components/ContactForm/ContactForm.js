import React, { useState } from "react"

import { useFormik } from "formik"

import { FormLabel, Grid, Input, GridItem, Button } from "@chakra-ui/react"

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  function validate(values) {
    const errors = {}
    if (!values.favoriteFood) {
      errors.favoriteFood = "Required"
    }

    if (!values.favoritePlace) {
      errors.favoritePlace = "Required"
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
      favoriteFood: "",
      favoritePlace: "",
    },
    validate,
    onSubmit: values => {
      setIsLoading(true)
      // make post request here
      setTimeout(() => {
        console.log(JSON.stringify(values))
        setIsLoading(false)
      }, 2000)
      // values = {"favoriteFood":"ramen","favoritePlace":"mountains"}
    },
  })

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={0.5}>
      <GridItem rowSpan={1} colSpan={{ base: 12 }} bg={{ base: "white" }} p={4}>
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="favoriteFood">Favorite Food:</FormLabel>
          <Input
            type="text"
            name="favoriteFood"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.favoriteFood && errors.favoriteFood ? (
            <div>{errors.favoriteFood}</div>
          ) : null}

          <FormLabel htmlFor="favoritePlace">Favorite place:</FormLabel>
          <Input
            type="text"
            name="favoritePlace"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.favoritePlace && errors.favoritePlace ? (
            <div>{errors.favoritePlace}</div>
          ) : null}

          <Button mt={4} colorScheme="teal" isLoading={isLoading} type="submit">
            submit
          </Button>
        </form>
      </GridItem>
    </Grid>
  )
}

export default ContactForm
