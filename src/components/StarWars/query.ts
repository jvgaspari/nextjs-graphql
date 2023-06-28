import { gql } from '@apollo/client'

export const GET_ALL_PEOPLE = gql`
  query Query {
    allPeople {
      people {
        id
        name
        homeworld {
          name
        }
        species {
          name
        }
      }
    }
  }
`

export const GET_PERSON = gql`
  query GetPerson($personId: ID) {
    person(id: $personId) {
      name
      eyeColor
      height
      species {
        name
      }
      homeworld {
        name
      }
      id
    }
  }
`
