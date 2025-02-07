import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/test" end>
        Test
      </NavLink>
      <NavLink to="/concerts">Concerts</NavLink>
    </nav>
  );
}

