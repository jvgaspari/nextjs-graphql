import React from 'react'
import { Typography } from 'antd'

interface ViewErrorProps {
  children: React.ReactNode
}

const ViewError: React.FC<ViewErrorProps> = ({ children }) => {
  return (
    <div>
      <Typography.Title level={3}>{children}</Typography.Title>
    </div>
  )
}

export default ViewError
