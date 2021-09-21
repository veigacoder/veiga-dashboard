import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import { AppBar, Home, SideAppBar } from './components'
import { Display, DisplayBody, DisplaySide, DisplayTop } from './containers/Display'

export const App = () => {
  return (
    <Display>
      <DisplaySide>
        <SideAppBar />
      </DisplaySide>
      <DisplayBody>
        <DisplayTop>
          <AppBar />
        </DisplayTop>
        <Switch>
          <Route path='/' component={Home} exact><Home /></Route>
          <Redirect to='/' exact />
        </Switch>
      </DisplayBody>
    </Display>
  )
}

export default App
