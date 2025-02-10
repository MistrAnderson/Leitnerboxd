import { BrowserRouter, Routes, Route } from 'react-router'
import { BaseLayout } from './layouts/BaseLayout.tsx'
import { Test } from './components/Test.tsx'
import { Concerts } from './components/Concerts.tsx'
import { Concert } from './components/Concert.tsx'
import App from './App.tsx'

export default function Router() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={ <BaseLayout /> } >
          <Route index element={ <App /> } />
          <Route path="test" element={ <Test /> } />

          <Route path="concerts" >
            <Route index element={ <Concerts /> } />
            <Route path=":id" element={ <Concert /> } />
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}
