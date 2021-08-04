import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Spinner } from '@/components/spinner'
import Home from '@/pages/home'
import About from '@/pages/about'
import NotFound from '@/pages/notFound'

import ArticleRoute from '@/pages/article/route'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Spinner />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/article' component={ArticleRoute}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
