import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigate from "./components/Navigate"
import Splash from "./components/Splash"
import Search from "./components/Search"
import Recommend from "./components/Recommend"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigate />
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/search" component={Search} />
          <Route path="/recommend" component={Recommend} />
        </Switch>
      </BrowserRouter>
    </>
  )
}