import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png' // Tell webpack this JS file uses this image

const Nav = ({ basketPrice }) => {
  return (
    <nav>
      <ul className='navbar'>
        <div className="project-name">
      <a href='https://github.com/gogamoga1/Memory-card/tree/master/memory-card'>
        <img id='github' src={logo} alt='github' /> Memory Game
      </a>
      </div>
      <div className="navbar-navigation">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/products'>
            <span>{basketPrice}$ in the basket</span>
          </Link>
        </li>
        </div>
      </ul>
    
    </nav>
  )
}

export default Nav
