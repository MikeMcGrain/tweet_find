import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import "./index.css"

export default function Splash() {
  return (
    <Jumbotron fluid>
      <div className="text-block">
        <p>Welcome</p>
        <ul>
          <li>Search for tweets by user</li>
          <li>Search for tweets by topic</li>
          <li>View recommended tweeters</li>
        </ul>
      </div>
    </Jumbotron>
  )
}
