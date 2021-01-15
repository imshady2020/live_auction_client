import React, { useEffect } from "react"
import Communication from "./Communication/Communication"
import Navbar from "./Components/Navbar"
import Home from "./Views/Home"
import Product from "./Views/Product"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  useEffect(() => {
    const cleanup = () => {
      Communication.Disconnect()
    }
    return () => {
      cleanup()
    }
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <Product />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
