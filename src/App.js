import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

import React, { useEffect, useState } from 'react'

import {
  AppBar,
  FooterAppBar,
  Home,
  Icons,
  Profile,
  SideAppBar
} from './components'

import {
  Display,
  DisplayBody,
  DisplayBottom,
  DisplaySide,
  DisplayTop
} from './containers/Display'

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
          <DisplayBottom>
            <FooterAppBar />
          </DisplayBottom>
        </DisplayBody>

      </Display>
    </Router>

  )
}

export default App
