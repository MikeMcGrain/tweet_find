import axios from "axios"
import dotenv from "dotenv"
dotenv.config({ silent: true })

const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const url = "https://api.twitter.com/oauth2/token"
const data = "grant_type=client_credentials"
const config = {
  auth: {
    username: PUBLIC_KEY,
    password: PRIVATE_KEY,
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
}

let token

export default async function getToken() {
  return token ? token
    : await axios
        .post(url, data, config)
        .then((response) => {
          token = response.data.access_token
          return token
        })
        .catch((error) => {
          console.log(error)
        })
}