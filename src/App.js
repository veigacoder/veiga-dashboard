import { Route, Switch, Redirect, BrowserRouter as Router, useLocation } from 'react-router-dom'
import React from 'react'
import {
  AppBar,
  Home,
  Profile,
  SideAppBar,
  Icons
} from './components'
import { Display, DisplayBody, DisplaySide, DisplayTop, PageBlock } from './containers/Display'

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
            <Route sensitive path='/profile' component={Profile} exact><Profile /></Route>
            <Redirect to='/' exact />
          </Switch>
        </DisplayBody>

      </Display>

    </Router>

  )
}

export default App
