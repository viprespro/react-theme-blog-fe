import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { login } from '@/apis/auth'

import style from './index.module.less'

export default class Login extends Component {
  onFinish = (values: any) => {
    console.log('Success:', values)
    const { username, password, remember } = values
    if (password.length < 6) {
      return console.log(123)
    }
    // apply api here!

    // login({ username, password, remember }).then((res) => {
    //   console.log(res)
    // })
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    return (
      <div className={style.container}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label='用户名'
            name='username'
            rules={[{ required: true, message: 'username is required!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='密码'
            name='password'
            rules={[{ required: true, message: 'password is required!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>记住我？</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <Button type='primary' htmlType='submit'>
                登录
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
