import { Button, Col } from 'antd'
import React from 'react'
import { ContentBox } from './styles'
import { ICharacterStarWars } from '../StarWars/types'
import stormtrooper from '../../assets/stormtrooper.jpg'
import Image from 'next/image'
import Title from 'antd/es/typography/Title'

interface IPersonCard {
  item: ICharacterStarWars
  onDelete: () => void
  onDetails: () => void
}

const PersonCard: React.FC<IPersonCard> = ({ item, onDelete, onDetails }) => {
  return (
    <Col xs={12} sm={6} md={8} style={{ padding: 8 }}>
      <ContentBox>
        <div
          style={{
            padding: '8px',
            display: 'flex',
            flex: 1,
            height: '100px',
            position: 'relative'
          }}
        >
          <Image alt="imagem fake" src={stormtrooper} fill />
        </div>
        <div>
          <Title level={4}>Nome: {item.name}</Title>
          <Title level={5}>Planeta: {item.homeworld.name}</Title>
          <Title level={5}>Espécie: {item?.species?.name ?? 'unknown'}</Title>
          <Button style={{ zIndex: 2 }} onClick={onDelete}>
            Deletar
          </Button>
          <Button onClick={onDetails}>Detalhes</Button>
        </div>
      </ContentBox>
    </Col>
  )
}

export default PersonCard
