export interface IAuxCharacter {
  name: string
  status: string
  image: string
  allPeople: {
    people: {
      name: string
      species: {
        name: string
      }
      homeworld: {
        name: string
      }
    }
  }
}

export interface IGetAllPeople {
  allPeople: {
    people: ICharacterStarWars[]
  }
}

export interface ICharacterStarWars {
  id: string
  name: string
  homeworld: {
    name: string
  }
  species: {
    name: string
  }
}

export interface IPerson {
  person: ICharacterStarWars
}

export interface IGetPersonFilter {
  personId: string
}
