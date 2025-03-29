import { ICard } from "@/idb/interfaces"
import Card from '@components/card/Card'
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { updateCard } from "@/store/cardsData/cardsSlice"
import { useState } from "react"

export default function Quiz() {
  const cards: ICard[] = useAppSelector(state => state.cards.cards)
  const dispatch = useAppDispatch()
  const [cardIndex, setCardIndex] = useState(0)
  const todayCards = getTodayCards(cards)

  console.log(todayCards)

  const handleCardKnowledge = (isKnow: boolean) => {
    if (cardIndex > todayCards.length - 1) return

    setCardIndex(cardIndex + 1)

    if (!isKnow && todayCards[cardIndex].level <= 1) return

    const updatedCard: ICard = {
      ...todayCards[cardIndex],
      level: todayCards[cardIndex].level + (isKnow ? 1 : -1),
      previousEncounter: new Date()
    }

    dispatch(updateCard(updatedCard))
  }

  return (
    <div>
      <Card key={todayCards[cardIndex].id} cardInfo={todayCards[cardIndex]} />

      <div>
        <button onClick={() => handleCardKnowledge(false)}>Wrong</button>
        <button onClick={() => handleCardKnowledge(true)}>Correct</button>
      </div>
    </div>
  )
}

function getTodayCards(cards: ICard[]): ICard[] {
  const newCardsList: ICard[] = []
  cards.map((card) => {
    const nextEncounter = getCalculateNextEncounter(card.previousEncounter, card.level)
    if (formatDate(nextEncounter) <= formatDate(new Date())) {
      newCardsList.push(card)
    }
  })

  return newCardsList
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0]
}

function getCalculateNextEncounter(prevEncounter: Date, level: number): Date {
  const nextEncounter = new Date(prevEncounter)
  nextEncounter.setDate(nextEncounter.getDate() + 2 ** (level - 1))

  return nextEncounter
}
