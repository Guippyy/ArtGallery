import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/ArtGallery/"
        end
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Paintings
      </NavLink>

      <NavLink
        to="/ArtGallery/sketches"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Sketches
      </NavLink>

      <NavLink
        to="/ArtGallery/about"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;