import { ICard } from "../idb/interfaces";

export default function Card( { cardInfo } : { cardInfo: ICard }) {
  return (
    <div>
      <p>Question: {cardInfo.question}</p>
      <p>Answer: {cardInfo.answer}</p>
    </div>
  )
}
