import React from 'react'
import { Input } from 'antd'
import { Flex, InputBox } from './styles'

interface IFilterComponent {
  nameFilter: string
  speciesFilter: string
  setNameFilter: (value: React.SetStateAction<string>) => void
  setSpeciesFilter: (value: React.SetStateAction<string>) => void
}

const FilterComponent: React.FC<IFilterComponent> = ({
  nameFilter,
  speciesFilter,
  setNameFilter,
  setSpeciesFilter
}) => {
  return (
    <Flex>
      <InputBox>
        <Input
          placeholder="Filtrar por nome"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <Input
          placeholder="Filtrar por espécie"
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
        />
      </InputBox>
    </Flex>
  )
}

export default FilterComponent
