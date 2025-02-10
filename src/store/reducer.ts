import { combineReducers } from 'redux'
import darkReducer from './dark-mode/darkSlice'


const rootReducer = combineReducers({
  darkMode: darkReducer
})

export default rootReducer
