import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './style.scss'

import { Spinner } from './components/common/Spinner'

import Home from './components/home'

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>

)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)