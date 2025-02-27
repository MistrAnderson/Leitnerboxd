import { ICard } from "../idb/interfaces";

// TODO: do the css of the components
export default function Card( { cardInfo } : { cardInfo: ICard }) {
  return (
    <div>
      <p>Question: {cardInfo.question}</p>
      <p>Answer: {cardInfo.answer}</p>
    </div>
  )
}
