import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Spinner } from '@/components/spinner'
import Home from '@/pages/home'
import About from '@/pages/about'
import { AppProvider } from '@/context/appContext'
import 'antd/dist/antd.css'
import '@/styles/index.less'

ReactDOM.render(
  <AppProvider>
    <Router>
      <Spinner />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/home' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
      </Switch>
    </Router>
  </AppProvider>,
  document.getElementById('root'),
)
