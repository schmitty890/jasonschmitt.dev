import axios from "axios"
import dayjs from "dayjs"
import hockeyLogos from "../data/teamIconData.json"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

export const getSchedule = async () => {
  try {
    let URL = "https://statsapi.web.nhl.com/api/v1/schedule"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    console.log(response)

    response.data.dates[0].games.forEach(game => {
      game.gameDate = dayjs(game.gameDate).fromNow()
      // console.log(game.teams)
      // console.log(game.teams.away.team.id)
      // console.log(game.teams.home.team.id)
      // console.log(hockeyLogos)
      hockeyLogos.forEach(team => {
        // console.log(team)
        if (team.id === game.teams.away.team.id) {
          game.teams.away.team.logo = team.src
          game.teams.away.team.logoAlt = team.srcAlt
          game.teams.away.team.logoBgColor = team.logoBgColor
        }
        if (team.id === game.teams.home.team.id) {
          game.teams.home.team.logo = team.src
          game.teams.home.team.logoAlt = team.srcAlt
          game.teams.home.team.logoBgColor = team.logoBgColor
        }
      })
    })

    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}
