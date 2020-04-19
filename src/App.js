import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Weather from "./Pages/Weather"
import Dashboard from "./Pages/Dashboard"


const App = () => {
  return (
    <Fragment>
      <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
      </Switch>
    </Router>
    </Fragment>
  )
}

export default App

