import { Action } from '../interfaces'

// const initialState = false
const initialState = {
  isInQuiz: false,
  currentCard: 1
}

export default function quizReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "quiz/switchQuizState": {
      return {
        ...state,
        isInQuiz: !state.isInQuiz
      }
    }
    case "quiz/setCurrentCard": {
      return {
        ...state,
        currentCard: action.payload
      }
    }
    default:
      return state
  }
}

