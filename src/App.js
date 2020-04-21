import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom"
import Weather from "./Pages/Weather"
import Dashboard from "./Pages/Dashboard/Dashboard"
import MapLebar from "./Pages/MapLebar/MapLebar"


const App = () => {

  function Child(){
    let {lokasi} = useParams()
    return(
      <MapLebar lokasi={lokasi}/>
    )
  }

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
        <Route path="/site/:lokasi">
          <Child />
        </Route>
      </Switch>
    </Router>
    </Fragment>
  )
}

export default App

