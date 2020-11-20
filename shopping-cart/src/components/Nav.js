import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png' // Tell webpack this JS file uses this image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -1,
    top: -4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

const Nav = ({ basketPrice, currentOrder }) => {
console.log(currentOrder);
  const [basketCount, setbasketCount] = useState(0)

  useEffect(() => {
    const itemsCountInTheBasket = 
    currentOrder.reduce((acc, curVal, curIdx) => {
      return acc +=  curVal.qty
    }, 0)
    
    console.log(itemsCountInTheBasket);
    setbasketCount(itemsCountInTheBasket)
    
  }, [basketPrice])
  const [animation, setAnimation] = useState(0)
  useEffect(() => {
    if (basketPrice) {
      setAnimation(1)
      setTimeout(() => {
        setAnimation(0)
      }, 1000)
    }
  }, [basketPrice])
  return (
    <nav id='outer-container'>
      <ul className='navbar'>
        <div className='project-name'>
          <a
            href='https://github.com/gogamoga1/Shopping-cart/tree/master/shopping-cart'
            className='logo-link'
          >
            <img id='github' src={logo} alt='github' /> Shopping cart
          </a>
        </div>
        <div className='navbar-navigation'>
          <li id='home'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li className={animation ? `wobble-hor-bottom` : ``}>
            <Link to='/products'>
              <span>
                <StyledBadge badgeContent={basketCount} color='secondary'>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </StyledBadge>{' '}
                <span className='nav-basket-price'>{basketPrice}$ </span>
              </span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Nav
