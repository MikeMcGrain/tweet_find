import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"

export default function Search() {
  const [tweets, setTweets] = useState([
    {
      image: "user image",
      name: "Bob",
      screenName: "@BobsTwitter",
      text: "blah blah blah",
      date: "YYYY-MM-DD",
    },
    {
      image: "user image",
      name: "Horace Silver",
      screenName: "@SilverTwitter",
      text: "blah blah blah",
      date: "YYYY-MM-DD",
    },
    {
      image: "user image",
      name: "Sonny Clark",
      screenName: "@SonnysTwitter",
      text: "blah blah blah",
      date: "YYYY-MM-DD",
    },
    {
      image: "user image",
      name: "Cleavon Chesterton",
      screenName: "@LevonCleavon",
      text: "blah blah blah",
      date: "YYYY-MM-DD",
    },
    {
      image: "user image",
      name: "Eustice Jackson",
      screenName: "@JacksonTwitter",
      text: "blah blah blah",
      date: "YYYY-MM-DD",
    },
  ])
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={5} className="text-center">
          <div className="searchbox">
            <input
              type="text"
              placeholder="enter a username or topic..."
              autoFocus
            />
            <Container fluid>
              <Row>
                <Col>
                  <button className="button-style">@</button>
                </Col>
                <Col>
                  <button className="button-style">#</button>
                </Col>
              </Row>
            </Container>
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
        </Col>
      </Row>
    </Container>
  )
}
