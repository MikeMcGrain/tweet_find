import React from "react"
import Image from "react-bootstrap/Image"
import background from "./images/background.jpg"

export default function Splash() {
  return (
    <div>
      <Image src={background} fluid />
    </div>
  )
}