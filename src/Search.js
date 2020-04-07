import React from "react"

export default function Search() {
  return (
    <div className="searchbox">
      <input type="text" placeholder="enter a username or topic..." autoFocus />
      <br />
      <button>@</button>
      <button>#</button>
    </div>
  )
}
