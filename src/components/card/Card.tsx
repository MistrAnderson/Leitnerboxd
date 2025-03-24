import { ICard } from "@/idb/interfaces";
import style from "./card.module.css"

// TODO: do the css of the components
export default function Card( { cardInfo } : { cardInfo: ICard }) {
  return (
    <div className={style.card}>
      <p>Question: {cardInfo.question}</p>
      <p>Answer: {cardInfo.answer}</p>
    </div>
  )
}
