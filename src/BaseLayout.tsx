import { Outlet } from 'react-router'
import { Navbar } from './components/Navbar.tsx'

export function BaseLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
