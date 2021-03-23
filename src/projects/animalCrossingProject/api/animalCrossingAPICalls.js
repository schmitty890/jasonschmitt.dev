import axios from "axios"

export const getFish = async () => {
  try {
    let URL = "https://acnhapi.com/v1a/fish"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}
