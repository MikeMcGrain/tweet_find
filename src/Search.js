import React from "react"

export default function Search() {
  return (
    <div className="searchbox">
      <input type="text" placeholder="Username or Topic" />
      <br />
      <button>@</button>
      <button>#</button>
    </div>
  )
}
