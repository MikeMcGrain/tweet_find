import express from "express"
import axios from "axios"
import getToken from "./getToken.js"
import dotenv from "dotenv"
dotenv.config({ silent: true })

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.static("client/build"))

app.get("/api/search", async (req, res) => {
  const url = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}&lang=en&result_type=recent&count=3`
  const token = await getToken()
  const authString = `Bearer ${token}`

  axios
    .get(url, { headers: { authorization: authString } })
    .then((response) => {
      const tweets = response.data.statuses.map((tweet) => {
        return {
          id: tweet.id,
          userImg: tweet.user.profile_image_url,
          tweetBody: tweet.text,
          datePosted: tweet.created_at,
          userName: tweet.user.name,
          userHandle: tweet.user.screen_name,
          retweets: tweet.retweet_count,
          likes: tweet.favorite_count,
        }
      })
      res.send(tweets)
    })
    .catch((error) => {
      console.log(`Error from query: ${error}`)
    })
})

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
