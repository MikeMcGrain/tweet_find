import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import Image from "react-bootstrap/Image"

export default function Recommend() {
  return (
    <div>
      <h1>Recommended Twitterers</h1>
      <p>Same as search page, but with five fixed selections</p>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
