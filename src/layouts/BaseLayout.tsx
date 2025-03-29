import { Outlet } from 'react-router'
import { Navbar } from '@/components/navbar/Navbar.tsx'
import { loadCardsFromIDB, saveCardsToIDB } from '@/store/cardsData/cardsSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'

export function BaseLayout() {
  const state = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadCardsFromIDB())
  
    const handleSave = () => dispatch(saveCardsToIDB())
    window.addEventListener("beforeunload", handleSave)
  
    return () => window.addEventListener("beforeunload", handleSave)
  }, [])
  
  useEffect(() => { dispatch(saveCardsToIDB()) }, [state])


  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
