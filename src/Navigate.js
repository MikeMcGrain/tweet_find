import React from "react"
import { Navbar, Nav } from "react-bootstrap/"
import twitterLogo from "./images/twitterLogoOutline.png"

export default function Navigate() {
  return (
    <Navbar className="nav-style" bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="/">
        <img
          src={twitterLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Twitter logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/recommend">Recommendations</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
