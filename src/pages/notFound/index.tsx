import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <Link to='/'>
        <div>哎呀，迷路了啊！ 点我回去吧</div>
      </Link>
    )
  }
}
