import express from "express"
import axios from "axios"
import getToken from "./getToken.js"
import dotenv from "dotenv"
dotenv.config({ silent: true })

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.static("client/build"))

app.get("/api/search", async (req, res) => {
  const token = await getToken()
  const url = `https://api.twitter.com/1.1/search/tweets.json`
  const config = {
    params: {
      q: req.query.q,
      result_type: "mixed",
      count: 3,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  axios
    .get(url, config)
    .then((response) => {
      const tweets = response.data.statuses.map((tweet) => {
        return {
          id: tweet.id,
          userURL: tweet.user.url,
          userImg: tweet.user.profile_image_url,
          userName: tweet.user.name,
          userHandle: tweet.user.screen_name,
          tweetBody: tweet.text,
          datePosted: tweet.created_at,
          retweets: tweet.retweet_count,
          likes: tweet.favorite_count,
        }
      })
      res.send(tweets)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
