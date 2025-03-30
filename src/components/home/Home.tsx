import { useAppSelector } from '@/store/hooks'
import Card from '@components/card/Card'
import { ICard } from '@/idb/interfaces'
import style from './home.module.css'

export default function Home() {
  const cards: ICard[] = useAppSelector(state => state.cards.cards)

  return (
    <div>
      {cards?.map((card) => (
        <Card key={card.id} cardInfo={card} />
      ))}
    </div>
  )
}
