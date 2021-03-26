import GitHub from "github-api"
import axios from "axios"
import dayjs from "dayjs"
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

export const test = async () => {
  const dataObj = {
    data: "test",
  }
  return dataObj
}
