import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigate from "./Navigate"
import Home from "./Home"
import Search from "./Search"
import Recommended from "./Recommended"

function App() {
  return (
    <>
      <Navigate />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/recommended" exact component={Recommended} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
