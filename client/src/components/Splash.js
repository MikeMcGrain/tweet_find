import React from "react"
import "../index.css"

export default function Splash() {
  return (
    <div className="splash-text-block">
      <p>Welcome</p>
      <ul>
        <li>Search for tweets by user</li>
        <li>Search for tweets by topic</li>
        <li>View recommended tweeters</li>
      </ul>
    </div>
  )
}