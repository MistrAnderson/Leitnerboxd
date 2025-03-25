import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: false,
  notif: false,
  numberOfCardsPerDay: 10,
  maxLevelOfCards: 5
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    switchDarkMode: (state) => { state.darkMode = !state.darkMode },
    notifIsActive: (state) => { state.notif = !state.notif },
    setCardPerDay: (state, action) => { state.numberOfCardsPerDay = action.payload },
    setMaxLevel: (state, action) => { state.maxLevelOfCards = action.payload },
  }
})

export const { switchDarkMode, notifIsActive, setCardPerDay, setMaxLevel} = settingsSlice.actions
export default settingsSlice.reducer
