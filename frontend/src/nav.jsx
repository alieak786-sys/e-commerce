import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { useContext, useState } from "react";
import { Shopcontext } from "./shopcontext";

const Navbar = () => {
    const [visible,setvisible]=useState(false)
    const {showsearch,setshowsearch,navigate,getcart,setcart,token,settoken}=useContext(Shopcontext)
    const logout=()=>{
       setcart({})
      localStorage.removeItem('token')
      settoken('')
     
      navigate('/login')
    } 
  return (<>
    <nav className="navbar">
        
      {/* Logo */}
      <div className="navbar__logo">
        <NavLink to="/" className="navbar__logo-link">
          <span className="navbar__logo-icon">⬡</span>
          <span className="navbar__logo-text">Shopora</span>
        </NavLink>
      </div>

      {/* Nav Links */}
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/collections"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Collections
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

<button 
  className="navbar__icon-btn navbar__hamburger" 
  onClick={()=>setvisible(true)}
  title="Menu"
> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</button>

         <div className="navbar__actions">

        {/* Search */}
        
        <button onClick={()=>setshowsearch(true)} className="navbar__icon-btn" title="Search" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        {/* Cart */}
        <NavLink to="/cart" className="navbar__icon-btn navbar__cart-btn" title="Cart" aria-label="Add to Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <span className="navbar__cart-badge">{getcart()}</span>
        </NavLink> 

        {/* Profile Dropdown */}
       
        <div  className="navbar__profile">
          <button  className="navbar__icon-btn navbar__profile-btn" title="Profile" aria-label="Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Dropdown Menu */}
        <div  className="navbar__dropdown">
      <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "navbar__dropdown-item navbar__dropdown-item--active" : "navbar__dropdown-item"
              }>
           
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              My Profile
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "navbar__dropdown-item navbar__dropdown-item--active" : "navbar__dropdown-item"
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="13" y2="16" />
              </svg>
              My Orders
            </NavLink>

            <div className="navbar__dropdown-divider"></div>

            <NavLink onClick={logout}
              to="/logout"
              className="navbar__dropdown-item navbar__dropdown-item--logout"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </NavLink>
          </div> 
     
        </div>
        
     </div>
    </nav>{visible && (
  <div className="mobile-menu">
    <div className="mobile-menu-header">
      <button  className="back" onClick={() => setvisible(false)}>
       back
      </button>
    </div>

    <NavLink className={({ isActive }) =>
    isActive ? "wht active" : "wht"
  } to="/collections" onClick={() => setvisible(false)}>
      Collections
    </NavLink>

    <NavLink  className={({ isActive }) =>
    isActive ? "wht active" : "wht"
  } to="/about" onClick={() => setvisible(false)}>
      About
    </NavLink>

    <NavLink   className={({ isActive }) =>
    isActive ? "wht active" : "wht"
  } to="/contact" onClick={() => setvisible(false)}>
      Contact
    </NavLink>
  </div>
)}

   </>);
};

export default Navbar;