import { ICard } from "@/idb/interfaces"
import Card from '@components/card/Card'
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useState } from "react"

export default function Quiz() {
  const cards: ICard[] = useAppSelector(state => state.cards.cards)
  const dispatch = useAppDispatch()

  const [cardIndex, setCardIndex] = useState(0)

  const todayCards = getTodayCards(cards)

  const goBackCard = () => { if (cardIndex > 0) setCardIndex(cardIndex - 1) }
  const goNextCard = () => { if (cardIndex < todayCards.length - 1) setCardIndex(cardIndex + 1) }

  return (
    <div>
      <Card key={todayCards[cardIndex].id} cardInfo={todayCards[cardIndex]} />

      <button onClick={goBackCard}>Prev</button>
      <button onClick={goNextCard}>Next</button>
    </div>
  )
}

function getTodayCards(cards: ICard[]): ICard[] {
  cards.map((card) => {
    console.log("Card level: " + card.level)
    console.log("Previous encounter: " + card.previousEncounter)
  })

  return cards
}
