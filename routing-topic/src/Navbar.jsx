import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <aside className="logo">
                <img src="https://img.magnific.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            </aside>
            <aside className="menu">
                <NavLink to='/'>Home Page</NavLink>
                <NavLink to='/employee'>Employee</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>


            </aside>
        </nav>
    )
}

export default Navbar
