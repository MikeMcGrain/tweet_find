import express from "express"
import axios from "axios"
import getToken from "./getToken.js"
import dotenv from "dotenv"
dotenv.config({ silent: true })

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static("client/build"))

app.get("/api/search", async (req, res) => {
  const url = "https://api.twitter.com/1.1/search/tweets.json?q=naval&lang=en&result_type=recent&count=1"
  const token = await getToken()
  const authString = `Bearer ${token}`

  axios
    .get(url, { headers: { authorization: authString } })
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(`Error from query: ${error}`)
    })
})

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))