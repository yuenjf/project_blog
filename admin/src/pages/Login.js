import React, { useState } from 'react'
import { Spin, Card, Input, Button } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

const Login = () => {
  const [userName, setUserName] = useState() // eslint-disable-line no-unused-vars
  const [password, setPassword] = useState() // eslint-disable-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckLogin = () => {
    setIsLoading(true)
  }
  return (
    <>
      <div className="login">
        <Spin spinning={isLoading}>
          <Card
            title="Cheney Blog's System"
            bordered={true}
            style={{ width: 400 }}
          >
            <Input
              id="userName"
              size="large"
              placeholder="Enter your userName"
              prefix={<UserOutlined />}
              onChange={(e) => {
                setUserName(e.target.value)
              }}
            />
            <br />
            <br />
            <Input.Password
              id="password"
              size="large"
              placeholder="Enter your password"
              prefix={<KeyOutlined />}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <br />
            <br />
            <Button
              type="primary"
              size="large"
              block
              onClick={handleCheckLogin}
            >
              {' '}
              Login in{' '}
            </Button>
          </Card>
        </Spin>
      </div>

      <style jsx>{`
        body {
          background-color: #f0f0f0;
        }
        .login {
          position: absolute;
          width: 400px;
          height: 270px;
          margin: auto;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </>
  )
}

export default Login