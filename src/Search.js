import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tweets, setTweets] = useState([])

  function handleInput(e) {
    setSearchTerm(e.target.value)
  }

  function searchByUser() {
    setSearchTerm("")
    setTweets([
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
  }

  function searchByTopic() {
    setSearchTerm("")
    setTweets([
      {
        image: "user image",
        name: "Bill",
        screenName: "@BillsTwitter",
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
  }

  const renderTweets = tweets.map((tweet) => {
    return (
      <Card className="tweet-card" key={tweet.screenName}>
        <Card.Body>
          <img src={tweet.image} />
          <p>
            {tweet.name}
            {tweet.screenName}
          </p>
          <p>{tweet.text}</p>
          <p>{tweet.date}</p>
        </Card.Body>
      </Card>
    )
  })

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={5} className="text-center">
          <div className="searchbox">
            <input
              onChange={handleInput}
              value={searchTerm}
              type="text"
              placeholder="enter a username or topic..."
              autoFocus
            />
            <Container fluid>
              <Row>
                <Col>
                  <button className="button-style" onClick={searchByUser}>
                    @
                  </button>
                </Col>
                <Col>
                  <button className="button-style" onClick={searchByTopic}>
                    #
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col>{renderTweets}</Col>
      </Row>
    </Container>
  )
}
