import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <aside className="logo">
            <h2>CRUD-APP</h2>
        </aside>
        <aside className="menu">
            <NavLink to='/'>Home Page</NavLink>
            <NavLink to='/displayMovie'>Display Movies</NavLink>
            <NavLink to='/addMovie'>Add Movies</NavLink>
        </aside>
    </nav>
  )
}

export default Navbar
