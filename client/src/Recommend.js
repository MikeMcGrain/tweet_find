import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import profilePic from "./images/twitterLogo.png"
import someGuy from "./images/someGuy.jpg"

export default function Search() {
  const [tweets, setTweets] = useState([])
  const [user, setUser] = useState()

  function displayTweets(e) {
    setUser(e.target.name)
    setTweets([
      {
        image: "user image",
        name: e.target.name,
        screenName: `@${e.target.name}sTwitter`,
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
    ])
  }

  const renderTweets = tweets.map((tweet) => {
    return (
      <Card body className="tweet-card" key={tweet.screenName}>
        <Card.Img
          className="tweet-card-img"
          src={profilePic}
          alt="profile pic"
        />
        <Card.Text>
          {tweet.name}
          {tweet.screenName}
          <br />
          {tweet.text}
          <br />
          {tweet.date}
        </Card.Text>
      </Card>
    )
  })

  return (
    <Container fluid="md">
      <h1 className="search-list-title">Curated Tweeters</h1>
      <Row>
        <Col>
          <Image
            className="recommend-img"
            name="NatureIsScary"
            onClick={displayTweets}
            src={someGuy}
            alt="NatureIsScary"
            roundedCircle
          />
        </Col>
        <Col>
          <Image
            className="recommend-img"
            name="MAIDsafe"
            onClick={displayTweets}
            src={profilePic}
            alt="MAIDsafe"
            roundedCircle
          />
        </Col>
        <Col>
          <Image
            className="recommend-img"
            name="Bitcoin"
            onClick={displayTweets}
            src={profilePic}
            alt="Bitcoin"
            roundedCircle
          />
        </Col>
        <Col>
          <Image
            className="recommend-img"
            name="Stoic"
            onClick={displayTweets}
            src={profilePic}
            alt="Stoic"
            roundedCircle
          />
        </Col>
        <Col>
          <Image
            className="recommend-img"
            onClick={displayTweets}
            name="Mickey"
            src={profilePic}
            alt="Mickey"
            roundedCircle
          />
        </Col>
      </Row>
      <Row>
        <Col>{renderTweets}</Col>
      </Row>
    </Container>
  )
}
