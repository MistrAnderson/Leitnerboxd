import { useAppSelector } from '@/store/hooks'
import Card from '@components/card/Card'
import { ICard } from '@/idb/interfaces'
import style from './home.module.css'
import Button from '../button/Button'
import { useNavigate } from 'react-router'

export default function Home() {
  const cards: ICard[] = useAppSelector(state => state.cards.cards)
  const navigator = useNavigate()
  
  const card: ICard = {
      id: crypto.randomUUID(),
      name: 'Card 1',
      question: "What is the name of the protagonist of Metal Gear ?",
      answer: 'Solid Snake',
      level: 0,
      previousEncounter: '2025-04-06'
  }

  return (
    <div className={style.container}>
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />
      <Card cardInfo={card} />

      {cards?.map((card) => (
        <Card key={card.id} cardInfo={card} />
      ))}

      <Button onClick={() => navigator('/quiz')} className={style.quizBtn}>Quiz</Button>
    </div>
  )
}
