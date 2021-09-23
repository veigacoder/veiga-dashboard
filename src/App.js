import { Route, Switch, Redirect, BrowserRouter as Router, useLocation } from 'react-router-dom'
import React from 'react'
import { AppBar, Home, SideAppBar, Icons } from './components'
import { Display, DisplayBody, DisplaySide, DisplayTop } from './containers/Display'

export const App = () => {
  return (
    <Router>
      <Display>
        <DisplaySide>
          <SideAppBar />
        </DisplaySide>
        <DisplayBody>
          <DisplayTop>
            <AppBar />
          </DisplayTop>
          <Switch>
            <Route sensitive path='/' component={Home} exact><Home /></Route>
            <Route sensitive path='/icons' component={Icons} exact><Icons /></Route>
            <Redirect to='/' exact />
          </Switch>
        </DisplayBody>

      </Display>

    </Router>
  )
}

export default App
