import React from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap/"
import { Link } from "react-router-dom"
import twitterLogo from "./images/twitterLogoOutline.png"

export default function Navigate() {
  return (
    <Navbar className="nav-style" bg="dark" variant="dark" expand="sm">
      <Navbar.Brand>
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
          <NavItem>
            <Link to="/" className="link">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/search" className="link">Search</Link>
          </NavItem>
          <NavItem>
            <Link to="/recommend" className="link">Recommendations</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
