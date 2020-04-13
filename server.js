import express from "express"
import path from "path"
import axios from "axios"

const app = express()

const PORT = 3000

app.use(express.static("client/build"))


app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname + "/client/build", "index.html"))
})

app.get("/search", (req, res) => {
  res.sendFile(path.join(_dirname + "/client/build", "index.html"))
})

app.get("/recommend", (req, res) => {
  res.sendFile(path.join(_dirname + "/client/build", "index.html"))
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
)