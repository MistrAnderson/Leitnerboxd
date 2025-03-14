import { Action } from '../interfaces'

const initialState = {
  cards: [],
  themes: []
}

export default function cardsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "data/saveState": {
        // TODO: Add logic to dump state in idb
      return {
      }
    }
    case "data/loadState": {
      return {
        ...state,
        // FIX: Need to use Redux Thunk 
        // to handle async logic
        // cards: await idb.getAll("cards"),
        // themes: await idb.getAll("themes")
      }
    }
    // TODO: Fix action error
    case "cards/addCard": {
      return {
        ...state,
        cards: state.cards.concat(action.payload)
      }
    }
    case "cards/clearCards": {
      return {
        ...state,
        cards: []
      }
    }
    default:
      return state
  }
}
