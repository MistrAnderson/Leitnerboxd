export interface ICard {
  id: string,
  name: string
  question: string,
  answer: string,
  level: number,
  previousEncounter: string,
  
}

export interface ICategory {
  name: string
}

export interface ITheme {
  id: number,
  name: string,
  description: string,
  cards: ICard[],
  categories: ICategory[]
}

export interface ILeitnerDB {
  cards: ICard[],
  themes: ITheme[]
}
