import React from "react"
import { Navbar, Nav } from "react-bootstrap/"

export default function Navigate() {
  return (
    <Navbar className="navbar" expand="sm">
      <Navbar.Brand href="/">TwitterLogo </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-text">
          <Nav.Link className="nav-text" href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/recommend">Recommendations</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
