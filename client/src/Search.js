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

  function searchByUser() {
    setListTitle(`Tweets by @${searchTerm}`)

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
    ])
    setSearchTerm("")
  }

  function searchByTopic() {
    setListTitle(`Tweets with #${searchTerm}`)
    const url = `/api/search?q=${searchTerm}` 
    console.log(url)

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.statuses)
      })
      .catch((error) => {
        console.log("Returned Error: " + error)
      })

    setSearchTerm("")
  }

  const renderTweets = tweets.map((tweet) => {
    return (
      <Card body className="tweet-card" key={tweet.screenName}>
        <img src={tweet.image} alt="profile pic" />
        <p>
          {tweet.name}
          {tweet.screenName}
        </p>
        <p>{tweet.text}</p>
        <p>{tweet.date}</p>
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
