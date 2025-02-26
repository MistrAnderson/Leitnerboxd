import { idb } from '../../idb/idb'
import { Action } from '../interfaces'

const initialState = {
  cards: [],
  themes: []
}

export default async function cardsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "card/saveState": {
      return {
      }
    }
    case "card/loadState": {
      return {
        ...state,
        cards: await idb.getAll("cards"),
        themes: await idb.getAll("themes")
      }
    }
    default:
      return state
  }
}
