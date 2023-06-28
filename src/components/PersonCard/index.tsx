import { Col, Row } from 'antd'
import React from 'react'
import {
  ContentBox,
  StyledNextImage,
  WrapperButton,
  WrapperImage
} from './styles'
import { ICharacterStarWars } from '../StarWars/types'
import stormtrooper from '../../assets/stormtrooper.jpg'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import CustomButton from '../Button'

interface IPersonCard {
  item: ICharacterStarWars
  onDelete: () => void
  onDetails: () => void
}

const PersonCard: React.FC<IPersonCard> = ({ item, onDelete, onDetails }) => {
  return (
    <Col xs={24} sm={12} md={8}>
      <ContentBox>
        <WrapperImage>
          <StyledNextImage alt="fake image" src={stormtrooper} fill />
        </WrapperImage>
        <div>
          <Title level={5}>Nome: {item.name}</Title>
          <Col>
            <Row>
              <Text>Planeta: {item.homeworld.name}</Text>
            </Row>
            <Row>
              <Text>Espécie: {item?.species?.name ?? 'unknown'}</Text>
            </Row>
          </Col>
          <WrapperButton>
            <CustomButton danger onClick={onDelete}>
              Deletar
            </CustomButton>
            <CustomButton type="default" onClick={onDetails}>
              Detalhes
            </CustomButton>
          </WrapperButton>
        </div>
      </ContentBox>
    </Col>
  )
}

export default PersonCard
