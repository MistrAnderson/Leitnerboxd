import { combineReducers } from 'redux'
import settingsReducer from './settings/settingsSlice'
import quizReducer from './quiz/quizSlice'
import cardsReducer from './cardsData/cardsSlice'


const rootReducer = combineReducers({
  settings: settingsReducer,
  quiz: quizReducer,
  cards: cardsReducer
})

export default rootReducer
