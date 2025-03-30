import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { Outlet } from 'react-router'
import Header from '@/components/header/Header.tsx'
import PWABadge from '@/PWABadge.tsx'
import '@/App.css'
import { loadCardsFromIDB, saveCardsToIDB } from './store/cardsData/cardsSlice'


export default function App() {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)


  useEffect(() => {
    dispatch(loadCardsFromIDB())
  
    const handleSave = () => dispatch(saveCardsToIDB())
    window.addEventListener("beforeunload", handleSave)
  
    return () => window.addEventListener("beforeunload", handleSave)
  }, [])
  
  useEffect(() => { dispatch(saveCardsToIDB()) }, [state])

  return (
    <>
      <Header />
      <Outlet />
      <PWABadge />
    </>
  )
}

