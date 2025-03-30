import { BrowserRouter, Routes, Route } from 'react-router'
import App from '@/App.tsx'
import Cards from '@components/cards/Cards.tsx'
import Quiz from '@components/quiz/Quiz'
import Home from '@components/home/Home'

export default function Router() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={ <App /> } >
          <Route index element={ <Home /> } />

          <Route path="cards" >
            <Route index element={ <Cards /> } />
          </Route>

          <Route path="quiz" >
            <Route index element={ <Quiz /> } />
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}
