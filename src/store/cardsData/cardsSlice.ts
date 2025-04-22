import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDB } from '@/idb/idb'
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
  const idb = await getDB()
  return await idb.getAll("cards")
})

export const addCardToIDB = createAsyncThunk("cards/addCardToIDB", async (newCard) => {
  const idb = await getDB()
  return await idb.put("cards", newCard)
})

export const saveCardsToIDB = createAsyncThunk("cards/saveCardsToIDB", async (_, { getState }) => {
  const idb = await getDB()
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

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state, action) => {
      const newCard: ICard = {
        id: crypto.randomUUID(),
        name: action.payload?.name || "Card name",
        question: action.payload?.question || "question",
        answer: action.payload?.answer || "answer",
        level: action.payload?.level ?? 0,
        previousEncounter: action.payload?.previousEncounter || new Date().toISOString(),
      }
      state.cards.push(newCard)
    },

    updateCard: (state, action: PayloadAction<ICard>) => {
      const updatedCard = action.payload
      state.cards = state.cards.map(card => card.id === updatedCard.id ? { ...card, ...updatedCard } : card)
    },

    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(card => card.id != action.payload)
    },

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

export const { add, clear, updateCard, deleteCard } = cardsSlice.actions
export default cardsSlice.reducer
