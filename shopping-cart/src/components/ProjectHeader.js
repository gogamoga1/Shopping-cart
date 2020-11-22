import React from 'react'
import logo from '../logo.png' // Tell webpack this JS file uses this image
import { useMediaQuery } from 'react-responsive'

const ProjectHeader = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 440px)' })

  return (
    <a
      href='https://github.com/gogamoga1/Shopping-cart/tree/master/shopping-cart'
      className='logo-link'
    >
      <img id='github' src={logo} alt='github' /> {!isTabletOrMobile && `Shopping cart`}
    </a>
  )
}

export default ProjectHeader
