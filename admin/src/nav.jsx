import { NavLink } from "react-router-dom"
import "./nav.css"

const Navbar = ({settoken}) => {

  return (
    <div className="admin-navbar">

      <NavLink to="/" className="admin-navbar__brand">
        <span className="admin-navbar__icon">⬡</span>
        <span className="admin-navbar__name">SHOPORA</span>
        <span className="admin-navbar__tag">Admin</span>
      </NavLink>

      <button onClick={()=>settoken('')} className="admin-navbar__logout">Logout</button>

    </div>
  )
}

export default Navbar