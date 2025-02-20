import { useEffect, useState } from "react"
import { idb } from "../idb/idb"
import { ICard } from "../idb/interfaces"
import Card from "./Card"

export default function Cards() {
  const [cards, setCards] = useState<ICard[]>()

  async function fetchData() {
    const allCards = await idb.getAll('cards')
    setCards(allCards)
  }

  async function handleButton(card: ICard) {
    idb.add('cards', card)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  const card1: ICard = { name: "card1", question: "q1", answer: "a1", level: 1, previousEncounter: "2025-02-18" }
  const card2: ICard = { name: "card2", question: "q2", answer: "a2", level: 1, previousEncounter: "2025-02-18" }
  const card3: ICard = { name: "card3", question: "q3", answer: "a3", level: 1, previousEncounter: "2025-02-18" }
  const card4: ICard = { name: "card4", question: "q4", answer: "a4", level: 1, previousEncounter: "2025-02-18" }
  const card5: ICard = { name: "card5", question: "q5", answer: "a5", level: 1, previousEncounter: "2025-02-18" }

  return (
    <div>
      <button onClick={() => handleButton(card1)}> add card1 </button>
      <button onClick={() => handleButton(card2)}> add card2 </button>
      <button onClick={() => handleButton(card3)}> add card3 </button>
      <button onClick={() => handleButton(card4)}> add card4 </button>
      <button onClick={() => handleButton(card5)}> add card5 </button>

      <button onClick={() => idb.clear('cards')}> clear all </button>

      <div>
        {cards?.map((card) => (
          <Card cardInfo={card} />
        ))}
      </div>
    </div>
  )
}
