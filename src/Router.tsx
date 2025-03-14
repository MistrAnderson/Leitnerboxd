import { BrowserRouter, Routes, Route } from 'react-router'
import { BaseLayout } from './layouts/BaseLayout.tsx'
import App from './App.tsx'
import Cards from './components/Cards.tsx'

export default function Router() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={ <BaseLayout /> } >
          <Route index element={ <App /> } />

          <Route path="cards" >
            <Route index element={ <Cards /> } />
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}
