import React, { useState } from "react"
import { Card, Image, Container, Col, Row } from "react-bootstrap"
import axios from "axios"
import moment from "moment"
import { importedTweeters } from "../assets/recomendTweeters.js"

export default function Search() {
  const [tweets, setTweets] = useState([])
  const [tweeters] = useState(importedTweeters)

  function displayTweets(e) {
    const url = `/api/searchuser/${e.target.name}`
    axios
      .get(url)
      .then((response) => {
        setTweets(response.data)
      })
      .catch((error) => {
        console.log("Returned Error: " + error)
      })
  }

  const renderTweeters = tweeters.map((tweeter) => {
    return (
      <Col className="text-center" key={tweeter.name}>
        <Image
          className="recommend-img"
          name={tweeter.name}
          onClick={displayTweets}
          src={tweeter.image}
          alt={tweeter.name + "profile pic"}
          roundedCircle
        />
      </Col>
    )
  })

  const renderTweets = tweets.map((tweet) => {
    return (
      <Card key={tweet.id} className="text-center" className="tweet-card" body>
        <Container fluid>
          <Row>
            <Col xs="auto">
              <a href={tweet.userURL} target="_blank" rel="noopener noreferrer">
                <Image src={tweet.userImg} alt="profile pic" roundedCircle />
              </a>
            </Col>
            <Col>
              <Card.Text>
                {tweet.userName}@{tweet.userHandle} | {moment(tweet.datePosted).fromNow()}
                <br />
                {tweet.tweetBody}
                <br />
                Retweets: {tweet.retweets} | Likes: {tweet.likes}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card>
    )
  })

  return (
    <Container>
      <h1 className="search-list-title">Curated tweeters</h1>
      <Row>{renderTweeters}</Row>
      <Row>
        <Col>{renderTweets}</Col>
      </Row>
    </Container>
  )
}
