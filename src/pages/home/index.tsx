import React, { Component } from 'react'
import AppContext from '@/context/appContext'

import style from './index.module.less'
export default class Home extends Component {
  componentDidMount() {
    const [{ userInfo }, dispatch] = this.context
    console.log('userInfo:', userInfo)

    setTimeout(() => {
      dispatch('ToggleLoading')
    }, 3000)
  }

  static contextType = AppContext

  render() {
    return (
      <div className={style.container}>
        <h1>this is in home Index.</h1>
      </div>
    )
  }
}
