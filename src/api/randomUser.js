import axios from "axios"
export const getRandomUser = async () => {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("https://randomuser.me/api/?results=1");
    console.log(response);
  } catch (error) {
    console.log(error); // catches both errors
  }
}
