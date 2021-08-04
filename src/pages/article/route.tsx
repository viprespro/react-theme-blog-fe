import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from '@/pages/notFound'

import Add from './add'
import List from './list'

export default class ArticleRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path='/article/add' component={Add} />
        <Route path='/article/list' component={List} />
        <Redirect exact from='/article' to='/article/list' />
        <Route component={NotFound} />
      </Switch>
    )
  }
}
