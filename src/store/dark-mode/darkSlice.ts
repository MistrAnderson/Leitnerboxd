const initialState = false

export default function darkReducer(state = initialState, action) {
  switch (action.type) {
    case "darkMode/switch": {
      return !state
    }
    default:
      return state
  }
}
