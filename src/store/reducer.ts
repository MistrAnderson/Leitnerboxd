import { combineReducers } from 'redux'
import settingsReducer from './settings/settingsSlice'
import quizReducer from './quiz/quizSlice'


const rootReducer = combineReducers({
  settings: settingsReducer,
  quiz: quizReducer
})

export default rootReducer
