import React, { Component } from 'react'
import AppContext from '@/context/appContext'

export default class Home extends Component {

  componentDidMount() {
    const [{userInfo },]  = this.context
    console.log('userInfo:', userInfo)
  }

  static contextType = AppContext

  render() {
    return (
      <>
        <h1>This is index home page.</h1>
      </>
    )
  }
}
