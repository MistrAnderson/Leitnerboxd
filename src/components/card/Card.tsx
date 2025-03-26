import { ICard } from "@/idb/interfaces";
import style from "./card.module.css"
import { useState } from "react";

// TODO: do the css of the components
export default function Card( { cardInfo } : { cardInfo: ICard }) {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false)

  const switchShowAnswer = () => {
    setIsShowingAnswer(! isShowingAnswer)
  }

  return (
    <div className={style.card}>

      <p>Question: {cardInfo.question}</p>
      { isShowingAnswer &&
        <p>Answer: {cardInfo.answer}</p>
      }

      <button onClick={switchShowAnswer}>
        { ! isShowingAnswer ? "Show" : "Hide" } answer
      </button>
    </div>
  )
}
