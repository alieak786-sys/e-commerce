import { NavLink } from "react-router-dom"

import Login from "./login"
import { useState } from "react"
const Sidebar = () => {

  return  (<> 
 
          <div className="sidebar">

      <NavLink to="/add" className="sidebar__link">
        <span className="sidebar__icon">📦</span>
        <span className="sidebar__label">Add Items</span>
      </NavLink>

      <NavLink to="/list" className="sidebar__link">
        <span className="sidebar__icon">📋</span>
        <span className="sidebar__label">List Items</span>
      </NavLink>

      <NavLink to="/order" className="sidebar__link">
        <span className="sidebar__icon">🧾</span>
        <span className="sidebar__label">Orders</span>
      </NavLink>

    </div>
  
    
    </>)
}

export default Sidebar