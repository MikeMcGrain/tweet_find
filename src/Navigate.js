import React from "react"
import { Navbar, Nav } from "react-bootstrap/"

export default function Navigate() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Find A Tweet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/recommend">Recommendations</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}