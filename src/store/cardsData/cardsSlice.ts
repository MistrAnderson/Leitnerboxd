import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { idb } from '@/idb/idb'
import { ICard, ITheme } from '@/idb/interfaces'


interface CardState {
  cards: ICard[],
  themes: ITheme[],
  status: "idle" | "loading" | "succeeded" | "failed"
}

const initialState: CardState = {
  cards: [],
  themes: [],
  status: "idle"
}

export const loadCardsFromIDB = createAsyncThunk<ICard[]>("cards/loadCardsFromIDB", async () => {
  return await idb.getAll("cards")
})

export const addCardToIDB = createAsyncThunk("cards/addCardToIDB", async (newCard) => {
  return await idb.put("cards", newCard)
})

export const saveCardsToIDB = createAsyncThunk("cards/saveCardsToIDB", async (_, { getState }) => {
  const tx = idb.transaction("cards", "readwrite")
  const store = tx.objectStore("cards")

  const state = getState() as { cards: CardState }
  await store.clear()
  for (const card of state.cards.cards) {
    await store.put(card)
  }

  await tx.done
  return state.cards.cards
})

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state, action) => { state.cards.push(action.payload) },
    clear: (state) => { state.cards = [] }
  },
  extraReducers(builder) {
    builder
      // loadCardsFromIDB
      .addCase(loadCardsFromIDB.pending, (state) => { state.status = "loading" })
      .addCase(loadCardsFromIDB.fulfilled, (state, action) => {
        state.cards = action.payload
        state.status = "idle"
      })

      // saveDate
      .addCase(saveCardsToIDB.fulfilled, (state) => { state.status = "idle" })

      // addCard
      .addCase(addCardToIDB.pending, (state) => { state.status = "loading" })
      .addCase(addCardToIDB.fulfilled, (state) => { state.status = "idle" })
  },
})

export const { add, clear } = cardSlice.actions
export default cardSlice.reducer
