import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import { BaseLayout } from './BaseLayout.tsx'
import { Test } from './components/Test.tsx'
import { Concerts } from './components/Concerts.tsx'
import { Concert } from './components/Concert.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
  </StrictMode>,
)
