import { Card } from 'antd'
import { styled } from 'styled-components'
import Image from 'next/image'

export const ContentBox = styled(Card)`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`
export const WrapperImage = styled.div`
  padding: 8px;
  display: flex;
  flex: 1;
  height: 100px;
  position: relative;
  border-radius: 8px;
`

export const StyledNextImage = styled(Image)`
  border-radius: 8px;
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
