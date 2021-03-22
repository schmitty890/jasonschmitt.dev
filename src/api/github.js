import GitHub from "github-api"
import axios from "axios"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

// export const listGithubRepos = async () => {
// console.log("getting repos")

// var me = gh.getUser() // no user specified defaults to the user for whom credentials were provided

// me.listRepos(function (err, repos) {
//   // do some stuff
//   console.log(repos)
// })
// }
export const test = async () => {
  const dataObj = {
    data: "test",
  }
  return dataObj
}

export const listGithubRepos = async () => {
  // export const listGithubRepos = async () => {
  // basic auth
  var gh = new GitHub({
    token: "3b5ff73a12871bea22f520e20bc841f63acda16f",
  })
  var me = gh.getUser("schmitty890")
  const dataObj = {
    uiRepoLastUpdated: "",
    apiRepoLastUpdated: "",
  }
  const repos = me.listRepos((err, repos) => {
    // look at all the starred repos!
    return dataObj
  })
  return repos

  // me.getProfile(function (err, info) {
  //   console.log(info)
  // })
}

// export const lastUpdateForUiAndAPIPortfolioRepos = async () => {
//   let URLs = [
//     "https://api.github.com/repos/schmitty890/jasonschmitt.dev",
//     "https://api.github.com/repos/schmitty890/jasonschmitt.dev-api",
//   ]

//   function getAllData(URLs) {
//     return Promise.all(URLs.map(fetchData))
//   }

//   function fetchData(URL) {
//     return axios
//       .get(URL)
//       .then(function (response) {
//         console.log(response)
//         let lastUpdatedAt = dayjs(response.data.updated_at).format("YYYY/MM/DD")
//         // console.log(lastUpdatedAt)
//         // lastUpdatedAt = dayjs("1999-01-01").fromNow()
//         console.log(lastUpdatedAt)
//         return {
//           success: true,
//           data: lastUpdatedAt,
//         }
//       })
//       .catch(function (error) {
//         return { success: false }
//       })
//   }

//   getAllData(URLs)
//     .then(resp => {
//       console.log(resp)
//     })
//     .catch(e => {
//       console.log(e)
//     })
// }

// export const showCommitsOnUiAndAPIRepos = async () => {
//   let URLs = [
//     "https://api.github.com/repos/schmitty890/jasonschmitt.dev/commits",
//     "https://api.github.com/repos/schmitty890/jasonschmitt.dev-api/commits",
//   ]

//   function getAllData(URLs) {
//     return Promise.all(URLs.map(fetchData))
//   }

//   function fetchData(URL) {
//     return axios
//       .get(URL)
//       .then(function (response) {
//         console.log(response)
//         return {
//           success: true,
//           data: response.data,
//         }
//       })
//       .catch(function (error) {
//         return { success: false }
//       })
//   }

//   getAllData(URLs)
//     .then(resp => {
//       console.log(resp)
//     })
//     .catch(e => {
//       console.log(e)
//     })
// }
