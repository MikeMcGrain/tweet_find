import React, { useState } from "react"
import { Card, Image, Container, Col, Row } from "react-bootstrap"
import axios from "axios"
import moment from "moment"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tweets, setTweets] = useState([])
  const [listTitle, setListTitle] = useState("")

  function handleInput(e) {
    setSearchTerm(e.target.value)
  }

  function searchByTopic() {
    const url = `/api/searchtopic/${searchTerm}`
    axios
      .get(url)
      .then((response) => {
        setTweets(response.data)
      })
      .catch((error) => {
        console.log("Returned Error: " + error)
      })
    setListTitle(`Tweets with #${searchTerm}`)
    setSearchTerm("")
  }

  function searchByUser() {
    const url = `/api/searchuser/${searchTerm}`
    axios
      .get(url)
      .then((response) => {
        setTweets(response.data)
      })
      .catch((error) => {
        console.log("Returned Error: " + error)
      })
    setListTitle(`Tweets by @${searchTerm}`)
    setSearchTerm("")
  }

  const renderTweets = tweets.map((tweet) => {
    return (
      <Card key={tweet.id} className="tweet-card" body>
        <Container fluid>
          <Row>
            <Col xs="auto">
              <a href={tweet.userURL} target="_blank" rel="noopener noreferrer">
                <Image src={tweet.userImg} alt="profile pic" roundedCircle />
              </a>
            </Col>
            <Col>
              <Card.Text>
                {tweet.userName}@{tweet.userHandle} |{" "}
                {moment(tweet.datePosted).fromNow()}
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
    <Container fluid>
      <Row>
        <Col xs={12} sm={5} className="text-center">
          <div className="searchbox">
            <input
              onChange={handleInput}
              value={searchTerm}
              type="text"
              placeholder=" search username or topic..."
              autoFocus
            />
            <Container fluid>
              <Row>
                <Col className="text-center">
                  <button className="button-style" onClick={searchByUser}>
                    @
                  </button>
                </Col>
                <Col className="text-center">
                  <button className="button-style" onClick={searchByTopic}>
                    #
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col>
          <h1 className="search-list-title">{listTitle}</h1>
          {renderTweets}
        </Col>
      </Row>
    </Container>
  )
}
