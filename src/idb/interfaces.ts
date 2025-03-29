export interface ICard {
  id: number,
  name: string
  question: string,
  answer: string,
  level: number,
  previousEncounter: Date,
  
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
