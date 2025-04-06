import { ICard } from "@/idb/interfaces";
import style from "./card.module.css"
import { useState } from "react";
import { formatDate, getCalculateNextEncounter } from "@/lib/Date";

export default function Card( { cardInfo } : { cardInfo: ICard }) {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false)

  const prevEncounter: Date = new Date(cardInfo.previousEncounter)
  const nextEncounter: Date = getCalculateNextEncounter(prevEncounter, cardInfo.level)
  const formatedNextEncounter: string = formatDate(nextEncounter)
  const formatedPrevEncouner: string = formatDate(prevEncounter)

  const switchShowAnswer = () => {
    setIsShowingAnswer(! isShowingAnswer)
  }

  return (
    <div className={`${style.card} ${isShowingAnswer ? style.active : ""}`}>

      <div>
        <span>{ isShowingAnswer ? "Answer" : "Question" }</span>
        <span>Nv: {cardInfo.level}</span>
      </div>

      <div>
        <p>{ isShowingAnswer ? cardInfo.answer : cardInfo.question }</p>
      </div>

      <div>
        <span>{formatedPrevEncouner}</span>
        <span>{formatedNextEncounter}</span>
      </div>

      <button onClick={switchShowAnswer}>
        { ! isShowingAnswer ? "Show" : "Hide" } answer
      </button>
    </div>
  )
}
