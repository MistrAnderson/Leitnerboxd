import { ICard } from "@/idb/interfaces"
import Card from '@components/card/Card'
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { updateCard } from "@/store/cardsData/cardsSlice"
import { useMemo, useState } from "react"
import { getTodayCards } from "@/lib/Date"
import style from './quiz.module.css'
import Button, { CorrectButton, WrongButton } from "../button/Button"
import { useNavigate } from "react-router"

export default function Quiz() {
  const cards: ICard[] = useAppSelector(state => state.cards.cards)
  const dispatch = useAppDispatch()
  const [cardIndex, setCardIndex] = useState(0)
  const todayCards = useMemo(() => getTodayCards(cards), [])
  const navigator = useNavigate()

  const allCardsWereSeen = cardIndex >= todayCards.length

  const handleCardKnowledge = (isKnow: boolean) => {
    if (cardIndex >= todayCards.length) return

    setCardIndex(cardIndex + 1)

    if (!isKnow && todayCards[cardIndex].level <= 1) return

    const updatedCard: ICard = {
      ...todayCards[cardIndex],
      level: todayCards[cardIndex].level + (isKnow ? 1 : -1),
      previousEncounter: new Date().toISOString()
    }

    dispatch(updateCard(updatedCard))
  }

  return (
    <div>
      {allCardsWereSeen ? (
        <div>No more cards for today !</div>
      ) : (
        <>
          <Card key={todayCards[cardIndex].id} cardInfo={todayCards[cardIndex]} />

          <div className={style.btnContainer}>
            <WrongButton onClick={() => handleCardKnowledge(false)}>Wrong</WrongButton>
            <CorrectButton onClick={() => handleCardKnowledge(true)}>Correct</CorrectButton>
          </div>
        </>
      )
      }
      <Button onClick={() => navigator('/')}>EXIT</Button>
    </div>
  )
}

