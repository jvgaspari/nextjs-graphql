import React from 'react'
import { Typography } from 'antd'

const ViewError: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Typography.Title level={3}>{children}</Typography.Title>
    </div>
  )
}

export default ViewError
