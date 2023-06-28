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

interface IDetailsPerson extends ICharacterStarWars {
  eyeColor: string
  height: number
}

export interface IPerson {
  person: IDetailsPerson
}

export interface IGetPersonFilter {
  personId: string
}
