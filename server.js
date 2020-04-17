import express from "express"
import axios from "axios"

const app = express()
const PORT = 3000

app.use(express.static("client/build"))

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const bearerToken = getBearerToken()

function getBearerToken() {
  const REQUEST_TOKEN_URL = "https://api.twitter.com/oauth2/token"
  const CONSUMER_PRIVATE_KEY = "fn0jUhnyU6aHW6BIiEWJGNTwTOHtJehjqfsQYjSojwUhxm6aJL"
  const CONSUMER_PUBLIC_KEY = "mnUnLLOSD8zxS1iXa7EVsCPpy"
  const DATA = "grant_type=client_credentials"
  const config = {
    auth: {
      username: CONSUMER_PUBLIC_KEY,
      password: CONSUMER_PRIVATE_KEY,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
    }
  }

  axios
    .post(REQUEST_TOKEN_URL, DATA, config)
    .then((response) => {
      console.log(response.data.access_token)
      return response.data.access_token
    })
    .catch((error) => {
      console.log("error: " + error)
    })
}

app.get("/test", (req, res) => {
  console.log(bearerToken)
  const QUERY_URL = "https://api.twitter.com/1.1/search/tweets.json?q=nasa&lang=en&result_type=recent&count=1"
  // const authString = `Bearer AAAAAAAAAAAAAAAAAAAAAIdtDgEAAAAAb%2BfhnBgcuQDwXgZwOCGgVAha8U0%3D6xBHQoenGIbUve1vDJq1yxLQhYfruxluhvDfRt4GkG7AjAyQIt`
  const authString = `Bearer ${bearerToken}`
  console.log(authString)
  axios
    .get(QUERY_URL, { headers: { authorization: authString } })
    .then((response) => {
      console.log(response.data.statuses)
    })
    .catch((error) => {
      console.log(`Error from query: ${error}`)
    })
})

app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
)
