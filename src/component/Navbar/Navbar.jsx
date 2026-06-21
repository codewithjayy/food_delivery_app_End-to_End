import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className = "mainContainer">

        <div className='logo'>
            <div className='foodlogo'>🥞</div>
            <div>Velvet Fork Restaurant</div>
        </div>
        <nav>
            <ul className="listItems">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <FaCartShopping />
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar