import express from "express"
import path from "path"
import axios from "axios"

const app = express()

const PORT = 3000

app.use(express.static("client/build"))

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
)

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname + "/client/build", "index.html"))
})

const BEARER_TOKEN = ""
const URL = "https://api.twitter.com/1.1/search/tweets.json?q=nasa&lang=en&result_type=recent&count=1"
const AuthStr = `Bearer ${BEARER_TOKEN}`

axios
  .get(URL, { headers: { Authorization: AuthStr } })
  .then((response) => {
    console.log(response.data.statuses)
  })
  .catch((error) => {
    console.log("error: " + error)
  })
