import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home } from './components'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
