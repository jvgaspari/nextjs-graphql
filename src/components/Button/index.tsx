import React, { ReactNode } from 'react'
import { Button, ButtonProps } from 'antd'
import styled from 'styled-components'

type StyledButtonProps = ButtonProps

const StyledButton = styled(Button)<StyledButtonProps>``

interface CustomButtonProps extends StyledButtonProps {
  children: ReactNode
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default CustomButton
