import React from 'react'
import { ICharacterStarWars } from '../StarWars/types'
import { ApolloError } from '@apollo/client'
import { Row, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import ViewError from '../ViewError'
import PersonCard from '../PersonCard'

interface IQueryPeople {
  people: ICharacterStarWars[]
  nameFilter: string
  speciesFilter: string
  loading: boolean
  error: ApolloError | undefined
  onDelete: (id: string) => void
  onDetails: (id: string) => void
}

const QueryPeople: React.FC<IQueryPeople> = ({
  people,
  nameFilter,
  speciesFilter,
  loading,
  error,
  onDelete,
  onDetails
}) => {
  const filterCharacters = (name: string, species: string) => {
    const filteredPeople = people.filter((person) => {
      const matchesName = person.name.toLowerCase().includes(name.toLowerCase())
      const matchesSpecies = person.species?.name
        ?.toLowerCase()
        .includes(species.toLowerCase())
      return matchesName && matchesSpecies
    })
    return filteredPeople
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
    <Row>
      {loading && <Spin indicator={antIcon} />}
      {error && <ViewError>{error.message}</ViewError>}
      {filterCharacters(nameFilter, speciesFilter).map((item) => (
        <PersonCard
          key={item.id}
          item={item}
          onDelete={() => onDelete(item.id)}
          onDetails={() => onDetails(item.id)}
        />
      ))}
    </Row>
  )
}

export default QueryPeople
