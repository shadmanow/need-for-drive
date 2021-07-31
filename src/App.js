import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { OrderPage } from './pages/OrderPage/OrderPage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/order" component={OrderPage} />
    </Switch>
  )
}

export default App
