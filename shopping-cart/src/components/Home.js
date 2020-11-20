import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='flex-container'>
      <section className='home-section'>
        <h3>Welcome to the Shop</h3>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, quia veritatis delectus
          ipsa ut illum debitis exercitationem vitae reprehenderit ea?
        </span>
        <br />
        <Link to='/shop'>
          <button>Shop page</button>
        </Link>
      </section>
    </div>
  )
}

export default Home
