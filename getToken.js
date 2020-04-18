import axios from "axios"

const PUBLIC_KEY = "mnUnLLOSD8zxS1iXa7EVsCPpy"
const PRIVATE_KEY = "fn0jUhnyU6aHW6BIiEWJGNTwTOHtJehjqfsQYjSojwUhxm6aJL"

const url = "https://api.twitter.com/oauth2/token"
const data = "grant_type=client_credentials"
const config = {
  auth: {
    username: PUBLIC_KEY,
    password: PRIVATE_KEY,
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
}

let token

export default async function getToken() {
  if (token) {
    return token
  }
  return await axios
    .post(url, data, config)
    .then((response) => {
      token = response.data.access_token
      return token
    })
    .catch((error) => {
      console.log(error)
    })
}
