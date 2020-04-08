import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"

export default function Search() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="searchbox">
            <input
              type="text"
              placeholder="enter a username or topic..."
              autoFocus
            />
            <br />
            <button>@</button>
            <button>#</button>
          </div>
        </Col>
        <Col>
        <Card className="tweet-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="tweet-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="tweet-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="tweet-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="tweet-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
