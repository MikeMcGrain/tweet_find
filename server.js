import express from "express"
import path from "path"
import axios from "axios"

const app = express()

const PORT = 3000

app.use(express.static("client/build"))

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
)

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname + "/client/build", "index.html"))
})