/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_ALL_PEOPLE, GET_PERSON } from './query'
import { Col, Row, Typography } from 'antd'
import {
  IGetAllPeople,
  ICharacterStarWars,
  IGetPersonFilter,
  IPerson
} from './types'
import ModalPersonDetails from '../ModalPersonDetails'
import FilterComponent from '../PersonFilter'
import QueryPeople from '../QueryPeople'

const StarWars: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [speciesFilter, setSpeciesFilter] = useState('')
  const [allPeople, setAllPeople] = useState<ICharacterStarWars[]>([])

  const handleClose = () => {
    setOpen(false)
  }

  const handleDeleteCharacter = (id: string) => {
    setAllPeople((prevPeople) =>
      prevPeople.filter((person: ICharacterStarWars) => person.id !== id)
    )
  }

  const handleShowDetails = (id: string) => {
    getCharacter({ variables: { personId: id } })
    setOpen(true)
  }

  const [getCharacters, { loading, error }] = useLazyQuery<IGetAllPeople>(
    GET_ALL_PEOPLE,
    {
      onCompleted: (data) => {
        setAllPeople(data?.allPeople?.people)
      }
    }
  )

  const handleCharactersList = () => {
    getCharacters()
  }

  useEffect(() => {
    handleCharactersList()
  }, [])

  const [
    getCharacter,
    { loading: loadingChar, error: errorChar, data: dataChar }
  ] = useLazyQuery<IPerson, IGetPersonFilter>(GET_PERSON)

  const { Title } = Typography

  return (
    <Row justify="center">
      <Col xs={24} sm={22} md={20} lg={18} xl={16}>
        <Title level={2}>Personagens</Title>
        <FilterComponent
          nameFilter={nameFilter}
          speciesFilter={speciesFilter}
          setNameFilter={setNameFilter}
          setSpeciesFilter={setSpeciesFilter}
        />
        <QueryPeople
          loading={loading}
          error={error}
          nameFilter={nameFilter}
          people={allPeople}
          speciesFilter={speciesFilter}
          onDelete={(id) => handleDeleteCharacter(id)}
          onDetails={(id) => handleShowDetails(id)}
        />
        <ModalPersonDetails
          Close={handleClose}
          data={dataChar}
          error={errorChar}
          loading={loadingChar}
          open={open}
        />
      </Col>
    </Row>
  )
}

export default StarWars
