import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigate from "./Navigate"
import Splash from "./Splash"
import Search from "./Search"
import Recommend from "./Recommend"

export default function App() {
  return (
    <>
      <Navigate />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/search" exact component={Search} />
          <Route path="/recommend" exact component={Recommend} />
        </Switch>
      </BrowserRouter>
    </>
  )
}