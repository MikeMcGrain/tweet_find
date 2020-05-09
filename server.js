import express from "express"
import path from "path"
import axios from "axios"
import getToken from "./getToken.js"
import dotenv from "dotenv"
dotenv.config({ silent: true })

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const app = express()
app.use(express.static("client/build"))

app.get("/api/searchtopic/:topic", async (req, res) => {
  const token = await getToken()
  const url = `https://api.twitter.com/1.1/search/tweets.json`
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: req.params.topic,
      result_type: "mixed",
      count: 3,
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

app.get("/api/searchuser/:user", async (req, res) => {
  const token = await getToken()
  const url = "https://api.twitter.com/1.1/statuses/user_timeline.json"
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      screen_name: req.params.user,
      count: 3,
    },
  }

  axios
    .get(url, config)
    .then((response) => {
      const tweets = response.data.map((tweet) => {
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

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))