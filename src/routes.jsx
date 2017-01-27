import { Route, IndexRedirect } from 'react-router'
import Search from './components/Search'
import App from './components/App'
import React from 'react'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/search' />
    <Route path='search' component={Search} />
  </Route>
)
