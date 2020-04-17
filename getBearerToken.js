import axios from "axios"

const PRIVATE_KEY = "fn0jUhnyU6aHW6BIiEWJGNTwTOHtJehjqfsQYjSojwUhxm6aJL"
const PUBLIC_KEY = "mnUnLLOSD8zxS1iXa7EVsCPpy"
const url = "https://api.twitter.com/oauth2/token"

const data = "grant_type=client_credentials"
const config = {
  auth: {
    username: PUBLIC_KEY,
    password: PRIVATE_KEY,
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json",
  },
}

export const getBearerToken = async () => {
  return await axios
    .post(url, data, config)
    .then((response) => {
      console.log("from getToken: " + response.data.access_token)
      return response.data.access_token
    })
    .catch((error) => {
      console.log("error: " + error)
    })
}
