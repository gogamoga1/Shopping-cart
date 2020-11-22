import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import ProjectHeader from './ProjectHeader'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -1,
    top: -4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

const Nav = ({ basketPrice, currentOrder }) => {
  const [basketCount, setbasketCount] = useState(0)
  const [animation, setAnimation] = useState(0)
  const [responsiveActive, setResponsiveActive] = useState(0)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 440px)' })

  useEffect(() => {
    const itemsCountInTheBasket = currentOrder.reduce((acc, curVal) => (acc += curVal.qty), 0)
    setbasketCount(itemsCountInTheBasket)
  }, [basketPrice])

  useEffect(() => {
    if (basketPrice) {
      setAnimation(1)
      setTimeout(() => {
        setAnimation(0)
      }, 1000)
    }
  }, [basketPrice])

  return (
    <nav className='nav-container'>
      <ul className='navbar'>
        <div className='project-name'>
          {!isTabletOrMobile ? (
            <ProjectHeader />
          ) : (
            <li>
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setResponsiveActive((prevValue) => !prevValue)}
              />
            </li>
          )}
        </div>
        <div className='navbar-navigation'>
          <div
            className={
              responsiveActive
                ? `is-open--navigation navbar-navigation-responsive`
                : `navbar-navigation-responsive`
            }
          >
            {isTabletOrMobile && <ProjectHeader />}

            <li id='home'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
          </div>

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
