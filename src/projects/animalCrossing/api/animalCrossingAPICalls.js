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

export const getSeaCreatures = async () => {
  try {
    let URL = "https://acnhapi.com/v1a/sea"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}

export const getFossils = async () => {
  try {
    let URL = "https://acnhapi.com/v1a/fossils"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}

export const getVillagers = async () => {
  try {
    let URL = "https://acnhapi.com/v1a/villagers"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}

export const getArt = async () => {
  try {
    let URL = "https://acnhapi.com/v1a/art"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}

export const getHouseware = async () => {
  try {
    let URL = "https://acnhapi.com/v1a/houseware"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}
