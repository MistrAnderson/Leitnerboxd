import { Link } from 'react-router'

export function Concerts() {
  return (
    <div>
      <ul>
        <li><Link to="/concerts/paris">Paris</Link></li>
        <li><Link to="/concerts/berlin">Berlin</Link></li>
        <li><Link to="/concerts/madrid">Madrid</Link></li>
        <li><Link to="/concerts/london">London</Link></li>
      </ul>
    </div>
  )
}
