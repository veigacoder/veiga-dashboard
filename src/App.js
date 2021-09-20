import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import { Home } from './components'

export const App = () => {
  return (

    <>
      <Switch>
        <Route path='/' component={Home} exact><Home /></Route>
        <Redirect to='/' exact />
      </Switch>
    </>

  )
}

export default App
