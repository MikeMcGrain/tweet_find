import express from "express"
import axios from "axios"
import { getBearerToken } from "./getBearerToken.js"

const app = express()

const PORT = 3000
//running on all mathcing routes?
app.use(express.static("client/build"))
app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
)

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const bearerToken = getBearerToken()

app.get("/test", (req, res) => {
  console.log("from app.get: " + bearerToken)
  // const QUERY_URL = "https://api.twitter.com/1.1/search/tweets.json?q=nasa&lang=en&result_type=recent&count=1"
  // const authString = `Bearer ${bearerToken}`
  // axios
  //   .get(QUERY_URL, { headers: { authorization: authString } })
  //   .then((response) => {
  //     console.log(response.data.statuses)
  //   })
  //   .catch((error) => {
  //     console.log(`Error from query: ${error}`)
  //   })
})
