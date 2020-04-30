import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import axios from "axios"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tweets, setTweets] = useState([])
  const [listTitle, setListTitle] = useState("")

  function handleInput(e) {
    setSearchTerm(e.target.value)
  }

  function searchByTopic() {
    setListTitle(`Tweets with #${searchTerm}`)

    const url = `/api/searchtopic/${searchTerm}`
    axios
      .get(url)
      .then((response) => {
        setTweets(response.data)
      })
      .catch((error) => {
        console.log("Returned Error: " + error)
      })

    setSearchTerm("")
  }

  function searchByUser() {
    setListTitle(`Tweets by @${searchTerm}`)

    const url = `/api/searchuser/${searchTerm}`
    axios
      .get(url)
      .then((response) => {
        setTweets(response.data)
      })
      .catch((error) => {
        console.log("Returned Error: " + error)
      })

    setSearchTerm("")
  }

  const renderTweets = tweets.map((tweet) => {
    return (
      <Card body className="tweet-card" key={tweet.id}>
       <a href={tweet.userURL} target="_blank">
         <img src={tweet.userImg} alt="profile pic" />
          <p>{tweet.userName}@{tweet.userHandle}</p>
        </a>
        <p>{tweet.tweetBody}</p>
        <p>{tweet.datePosted} {tweet.retweets} {tweet.likes}</p>
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
                  <button className="button-style" onClick={searchByUser}>@</button>
                </Col>
                <Col className="text-center">
                  <button className="button-style" onClick={searchByTopic}>#</button>
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
