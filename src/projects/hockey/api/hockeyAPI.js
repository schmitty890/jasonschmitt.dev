import axios from "axios"

export const getSchedule = async () => {
  try {
    let URL = "https://statsapi.web.nhl.com/api/v1/schedule"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}
