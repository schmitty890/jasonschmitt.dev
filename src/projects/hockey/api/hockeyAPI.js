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

    response.data.dates[0].games.forEach(async game => {
      game.gameDate = dayjs(game.gameDate).fromNow()
      console.log(game)
      console.log(game.link)
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

      let liveDataURL = `https://statsapi.web.nhl.com${game.link}`
      const liveData = await axios.get(liveDataURL)
      let contentDataURL = `https://statsapi.web.nhl.com/api/v1/game/${game.gamePk}/content`
      const contentData = await axios.get(contentDataURL)

      console.log(Object.entries(contentData.data.media.milestones).length)
      if (Object.entries(contentData.data.media.milestones).length > 0) {
        console.log(contentData.data.media.milestones)

        for (
          var i = 0;
          i < contentData.data.media.milestones.items.length;
          i++
        ) {
          contentData.data.media.milestones.items[i].timeAbsolute = dayjs(
            contentData.data.media.milestones.items[i].timeAbsolute
          ).fromNow()
        }
      }

      // console.log(liveData)
      console.log(contentData)
      game.liveData = liveData.data
      game.contentData = contentData.data

      // make axios call to get player roster and who is on the ice by player id
      // console.log(game.liveData.liveData.boxscore.teams)
      Object.keys(game.liveData.liveData.boxscore.teams).forEach(function (
        item
      ) {
        console.log(item) // key
        console.log(game.liveData.liveData.boxscore.teams[item]) // value
        // get skaters
        console.log(game.liveData.liveData.boxscore.teams[item].skaters)
        const skaters = game.liveData.liveData.boxscore.teams[item].skaters
        const skaterData = []
        skaters.forEach(async skater => {
          // console.log(skater)
          let skaterURL = `https://statsapi.web.nhl.com/api/v1/people/${skater}`
          const skaterDataToReturn = await axios.get(skaterURL)
          // console.log(skaterDataToReturn)
          skaterData.push(skaterDataToReturn)
          game.teams[item].team.players = skaterData
          // game.players = skaterData
        })

        // get goalies
        const goalies = game.liveData.liveData.boxscore.teams[item].goalies
        const goalieData = []
        goalies.forEach(async goalie => {
          // console.log(skater)
          let goalieURL = `https://statsapi.web.nhl.com/api/v1/people/${goalie}`
          const goalieDataToReturn = await axios.get(goalieURL)
          // console.log(skaterDataToReturn)
          goalieData.push(goalieDataToReturn)
          game.teams[item].team.goalies = goalieData
          // game.goalies = goalieData
        })

        // get on ice
        const onIcePlayers =
          game.liveData.liveData.boxscore.teams[item].onIcePlus
        const onIcePlayersData = []
        onIcePlayers.forEach(async player => {
          // console.log(player)
          console.log(player)
          let onIceURL = `https://statsapi.web.nhl.com/api/v1/people/${player.playerId}`
          const onIceDataToReturn = await axios.get(onIceURL)
          // console.log(onIceDataToReturn)
          onIceDataToReturn.shiftDuration = player.shiftDuration
          onIceDataToReturn.stamina = player.stamina
          onIcePlayersData.push(onIceDataToReturn)
          game.teams[item].team.onIcePlayers = onIcePlayersData
        })
        // get scratches
      })
      // game.liveData.liveData.boxscore.teams.forEach(team => {
      //   console.log("-------------")
      //   console.log(team)
      // })

      // game.team = game.liveData.data.liveData.boxscore.teams.away.skaters
    })
    return response
  } catch (error) {
    console.log(error) // catches both errors
  }
}
