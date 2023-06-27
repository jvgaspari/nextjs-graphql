'use client'
import { useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_ALL_PEOPLE, GET_PERSON } from './query'
import { Button, Col, Row, Typography, Modal, Spin, Input } from 'antd'
import { ContentBox, Flex, InputBox, ModalDetails } from './styles'
import { IGetAllPeople, ICharacterStarWars, IGetPersonFilter, IPerson } from './types'
import ViewError from '@/components/ViewError'
import stormtrooper from '../../assets/stormtrooper.jpg'
import Image from 'next/image'
import { LoadingOutlined } from '@ant-design/icons'

const StarWars: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [speciesFilter, setSpeciesFilter] = useState('')
  const [allPeople, setAllPeople] = useState<ICharacterStarWars[]>([])

  useEffect(() => {
    handleCharactersList()
  }, [])

  const handleCharactersList = () => {
    getCharacters()
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [getCharacters, { loading, error }] = useLazyQuery<IGetAllPeople>(GET_ALL_PEOPLE, {
    onCompleted: (data) => {
      setAllPeople(data?.allPeople?.people)
    }
  })

  const [getCharacter, { loading: loadingChar, error: errorChar, data: dataChar }] = useLazyQuery<IPerson, IGetPersonFilter>(GET_PERSON)

  const filterCharacters = (name: string, species: string) => {
    const filteredPeople = allPeople.filter((person) => {
      const matchesName = person.name.toLowerCase().includes(name.toLowerCase())
      const matchesSpecies = person.species?.name?.toLowerCase().includes(species.toLowerCase())
      return matchesName && matchesSpecies
    })
    return filteredPeople
  }

  const { Title } = Typography

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
    <Row justify="center">
      <Col xs={24} sm={22} md={20} lg={18} xl={16}>
        <Title level={2}>Personagens</Title>
        <Flex>
          <InputBox>
            <Input placeholder="Filtrar por nome" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
            <Input placeholder="Filtrar por espécie" value={speciesFilter} onChange={(e) => setSpeciesFilter(e.target.value)} />
          </InputBox>
        </Flex>
        <Row>
          {loading && <Spin indicator={antIcon} />}

          {error && <ViewError>{error.message}</ViewError>}

          {filterCharacters(nameFilter, speciesFilter).map((item) => (
            <Col xs={12} sm={6} md={8} style={{ padding: 8 }} key={item?.id}>
              <ContentBox>
                <div style={{ padding: '8px', display: 'flex', flex: 1, height: '100px', position: 'relative' }}>
                  <Image alt="imagem fake" src={stormtrooper} fill />
                </div>
                <div>
                  <Title level={4}>Nome: {item.name}</Title>
                  <Title level={5}>Planeta: {item.homeworld.name}</Title>
                  <Title level={5}>Espécie: {item?.species?.name ?? 'unknown'}</Title>
                  <Button style={{ zIndex: 2 }} onClick={() => setAllPeople((prevPeople) => prevPeople.filter((person) => person.id !== item.id))}>
                    Deletar
                  </Button>
                  <Button
                    onClick={() => {
                      getCharacter({ variables: { personId: item.id } })
                      setOpen(true)
                    }}
                  >
                    Detalhes
                  </Button>
                </div>
              </ContentBox>
            </Col>
          ))}
        </Row>
        <Modal onCancel={handleClose} aria-labelledby="simple-dialog-title" open={open} footer={null}>
          <ModalDetails>
            {loadingChar && <Spin indicator={antIcon} />}

            {errorChar && <ViewError>{errorChar.message}</ViewError>}

            {dataChar && (
              <>
                <Image alt="imagem detalhe" src={stormtrooper} />
                <Title level={5}>Nome</Title>
                <Title level={4}>{dataChar.person.name}</Title>
                <br />
                <div>
                  <Title level={5}>Origem</Title>
                  <Title level={5}>{dataChar.person.homeworld?.name ?? 'unknown'}</Title>
                </div>
                <br />
                <div>
                  <Title level={5}>Espécie</Title>
                  <Title level={5}>{dataChar.person.species?.name ?? 'unknown'}</Title>
                </div>
              </>
            )}
          </ModalDetails>
        </Modal>
      </Col>
    </Row>
  )
}

export default StarWars
