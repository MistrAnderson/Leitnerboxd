import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isInQuiz: false,
  currentCard: 1
}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    switchQuizState: (state) => { state.isInQuiz = !state.isInQuiz },
    setCurrentCard: (state, action) => { state.currentCard = action.payload }
  }
})

export const { switchQuizState, setCurrentCard } = quizSlice.actions
export default quizSlice.reducer
