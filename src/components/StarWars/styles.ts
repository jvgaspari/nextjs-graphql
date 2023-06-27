import { Card } from 'antd'
import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  margin-bottom: 16;
`

export const ContentBox = styled(Card)`
  padding: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  img {
    object-fit: cover;
  }
`

export const ModalDetails = styled.div`
  img {
    width: 256px;
    height: 256px;
    object-fit: cover;
  }

  div {
    background-color: #dedede;
    border-radius: 16px;
    padding: 8px 16px;
  }
`
