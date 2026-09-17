import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <aside className="logo">
                <h2>React JS</h2>
            </aside>
            <aside className='menu'>
                <a href="#">Home Page</a>
                <a href="#">About US</a>
                <a href="#">Contact US</a>
                <a href="#">Login</a>
                <a href="#">Registers</a>
            </aside>
            <aside className="icons">
                <i class="fa-solid fa-circle-user"></i>
            </aside>
        </nav>
    )
}

export default Navbar
