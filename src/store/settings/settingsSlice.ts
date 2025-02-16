import { Action } from '../interfaces'

const initialState = {
  darkMode: false,
  notif: false,
  numberOfCardsPerDay: 10,
  maxLevelOfCards: 5
}

export default function settingsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "settings/switchDarkMode": {
      return {
        ...state,
        darkMode: !state.darkMode
      }
    }
    case "settings/notifications": {
      return {
        ...state,
        notif: !state.notif
      }
    }
    case "settings/setCardPerDay": {
      return {
        ...state,
        numberOfCardsPerDay: action.payload
      }
    }
    case "settings/setMaxLevel": {
      return {
        ...state,
        maxLevelOfCards: action.payload
      }
    }
    default:
      return state
  }
}
