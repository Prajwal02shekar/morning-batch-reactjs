import React from 'react'
import Style from './navbar.module.css'

const Navbar1 = () => {
  return (
    <nav className={Style.navbarContainer}>
        <aside className={Style.logo}>
            <img src="https://cdn.pixabay.com/photo/2021/09/13/08/24/lion-6620633_640.png" alt="" />
        </aside>
        <aside className={Style.menu}>
            <a href="#">Home Page</a>
            <a href="#">About Us</a>
            <a href="#">Mens</a>
            <a href="#">Womens</a>
            <a href="#">Kids</a>
        </aside>
    </nav>
  )
}

export default Navbar1
