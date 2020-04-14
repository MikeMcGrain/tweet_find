import React, { useState } from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap/"
import { Link } from "react-router-dom"
import twitterLogo from "./images/twitterLogoOutline.png"
import otherTwitterLogo from "./images/twitterLogo.png"

export default function Navigate() {
  const [logo, setLogo] = useState(twitterLogo)

  function hover() {
    setLogo(otherTwitterLogo)
  }

  function unhover() {
    setLogo(twitterLogo)
  }

  return (
    <Navbar expand="sm">
      <Navbar.Brand>
        <Link to="/">
          <img
            onMouseOver={hover}
            onMouseOut={unhover}
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Twitter logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavItem>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/search" className="navbar-link">
              Search
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/recommend" className="navbar-link">
              Recommendations
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
