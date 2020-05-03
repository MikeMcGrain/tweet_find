import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import axios from "axios"
import Image from "react-bootstrap/Image"

import nature_is_scary_pic from "./images/natureisscary.jpg"
import maidsafe_pic from "./images/maidsafe.jpg"
import lbry_pic from "./images/lbry.png"
import bendormiki_pic from "./images/bendormiki.jpg"
import startsocieties_pic from "./images/startsocieties.jpg"

export default function Search() {
  const [tweets, setTweets] = useState([])
  const [tweeters] = useState([
    {
      name: "NatureisScary",
      image: nature_is_scary_pic,
    },
    {
      name: "maidsafe",
      image: maidsafe_pic,
    },
    {
      name: "LBRYio",
      image: lbry_pic,
    },
    {
      name: "startsocieties",
      image: startsocieties_pic,
    },
    {
      name: "bendormiki",
      image: bendormiki_pic,
    },
])

  function displayTweets(e) {
    const url = `/api/searchuser/${e.target.name}`
    axios
      .get(url)
      .then((response) => {setTweets(response.data)})
      .catch((error) => {console.log("Returned Error: " + error)})
  }

  const renderTweets = tweets.map((tweet) => {
    return (
      <Card body className="tweet-card" key={tweet.id}>
        <Card.Img
          className="tweet-card-img"
          src={tweet.userImg}
          alt="profile pic"
        />
        <Card.Text>
          {tweet.userName}@{tweet.userHandle}<br />
          {tweet.tweetBody}<br />
          {tweet.datePosted} {tweet.retweets} {tweet.likes}
        </Card.Text>
      </Card>
    )
  })

  const renderTweeters = tweeters.map((tweeter) => {
    return (
      <Col key={tweeter.name}>
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

  return (
    <Container fluid="md">
      <h1 className="search-list-title">Curated tweeters</h1>
      <Row>{renderTweeters}</Row>
      <Row>
        {renderTweets}
      </Row>
    </Container>
  )
}