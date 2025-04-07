import { BrowserRouter, Routes, Route } from 'react-router'
import App from '@/App.tsx'
import Quiz from '@components/quiz/Quiz'
import Home from '@components/home/Home'
import About from '@components/about/About'

export default function Router() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={ <App /> } >
          <Route index element={ <Home /> } />

          <Route path="quiz" >
            <Route index element={ <Quiz /> } />
          </Route>

          <Route path="about" >
            <Route index element={ <About /> } />
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )
}
