import { Router, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import { Home } from './components'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact> <Home /></Route>
      </Switch>
    </Router>
  )
}

export default App
