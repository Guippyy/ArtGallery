import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Paintings
      </NavLink>

      <NavLink
        to="/sketches"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Sketches
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;