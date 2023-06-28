import { Card } from 'antd'
import { styled } from 'styled-components'

export const ContentBox = styled(Card)`
  padding: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  img {
    object-fit: cover;
  }
`
