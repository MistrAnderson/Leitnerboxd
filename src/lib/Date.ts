import { ICard } from "@/idb/interfaces"

export function getTodayCards(cards: ICard[]): ICard[] {
  const newCardsList: ICard[] = []

  console.log(cards)

  cards.map((card) => {
    const nextEncounter = getCalculateNextEncounter(new Date(card.previousEncounter), card.level)

    if (formatDate(nextEncounter) <= formatDate(new Date())) {
      newCardsList.push(card)
    }
  })

  return newCardsList
}

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0]
}

export function getCalculateNextEncounter(prevEncounter: Date, level: number): Date {
  const nextEncounter = new Date(prevEncounter)
  nextEncounter.setDate(nextEncounter.getDate() + 2 ** (level - 1))

  return nextEncounter
}

