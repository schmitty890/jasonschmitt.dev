import axios from "axios"
import dayjs from "dayjs"
import hockeyLogos from "../data/teamIconData.json"
import eventTypeIdData from "../data/eventTypeIdData.json"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

export const getSchedule = async () => {
  try {
    // let URL = "https://statsapi.web.nhl.com/api/v1/schedule"
    let URL = "https://statsapi.web.nhl.com/api/v1/schedule?date=2021-04-17"
    // fetch data from a url endpoint
    const response = await axios.get(`${URL}`)
    // console.log(response)

    response.data.dates[0].games.forEach(async game => {
      game.gameDate = dayjs(game.gameDate).fromNow()
      // console.log(game)
      // console.log(game.link)
      // console.log(game.teams)
      // console.log(game.teams.away.team.id)
      // console.log(game.teams.home.team.id)
      console.log(game.teams.away.team.link)
      const awayTeamStatsURL = `https://statsapi.web.nhl.com${game.teams.away.team.link}/stats`
      const awayTeamStats = await axios.get(awayTeamStatsURL)

      const homeTeamStatsURL = `https://statsapi.web.nhl.com${game.teams.home.team.link}/stats`
      const homeTeamStats = await axios.get(homeTeamStatsURL)

      // game.teams.forEach(team => {
      //   console.log(team.id)
      // })
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

      // console.log(Object.entries(contentData.data.media.milestones).length)
      if (Object.entries(contentData.data.media.milestones).length > 0) {
        // console.log(contentData.data.media.milestones)
        // console.log(contentData.data.highlights)

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

      const shots = []
      const goals = []
      const penalties = []
      const eventTypeColors = []
      // console.log(liveData)
      liveData.data.liveData.plays.allPlays.map(play => {
        play.about.dateTime = dayjs(play.about.dateTime).fromNow()
        // console.log(play)

        if (play.result.eventTypeId == "SHOT") {
          shots.push(play.result)
        } else if (play.result.eventTypeId == "GOAL") {
          goals.push(play.result)
        } else if (play.result.eventTypeId == "PENALTY") {
          penalties.push(play.result)
        }

        if (play.players) {
          hockeyLogos.forEach(team => {
            // console.log(team)
            if (team.id === play.team.id) {
              play.team.logo = team.src
              play.team.logoAlt = team.srcAlt
              play.team.logoBgColor = team.logoBgColor
            }
          })

          eventTypeIdData.forEach(eventType => {
            if (eventType.eventTypeId === play.result.eventTypeId) {
              play.result.badgeColorScheme = eventType.colorScheme
              play.result.badgeVariant = eventType.variant
            }
          })
        }
      })
      // console.log(shots)
      // reverse arrays to save directly to state vs manipulating in component
      liveData.data.liveData.plays.allPlays = liveData.data.liveData.plays.allPlays
        .reverse()
        .slice(0, 10)
      liveData.data.liveData.plays.shots = shots.reverse()
      liveData.data.liveData.plays.goals = goals.reverse()
      liveData.data.liveData.plays.penalties = penalties.reverse()

      // console.log(liveData.data.liveData.plays.allPlays)

      // console.log(liveData)
      // console.log(contentData)
      game.liveData = liveData.data
      game.contentData = contentData.data
      game.awayTeamStats = awayTeamStats.data.stats
      game.homeTeamStats = homeTeamStats.data.stats

      // make axios call to get player roster and who is on the ice by player id
      // console.log(game.liveData.liveData.boxscore.teams)
      Object.keys(game.liveData.liveData.boxscore.teams).forEach(function (
        item
      ) {
        // console.log(item) // key
        // console.log(game.liveData.liveData.boxscore.teams[item]) // value
        // get skaters
        // console.log(game.liveData.liveData.boxscore.teams[item].skaters)
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
          // console.log(player)
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
