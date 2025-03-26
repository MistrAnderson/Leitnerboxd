import { BrowserRouter, Routes, Route } from 'react-router'
import { BaseLayout } from '@/layouts/BaseLayout.tsx'
import App from '@/App.tsx'
import Cards from '@components/cards/Cards.tsx'
import Quiz from '@/components/quiz/Quiz'

export default function Router() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={ <BaseLayout /> } >
          <Route index element={ <App /> } />

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
