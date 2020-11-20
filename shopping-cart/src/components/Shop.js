import React, { useState } from 'react'
import { phones } from './Data'
import { Link } from 'react-router-dom'


const Shop = () => {

  const createCardsArray = phones.map((el, index) => {
    return (
      <div className='product-item' data-id={el.id} key={el.id}>
          <div className="product-item-container">
        <img className='product-item-img' src={require(`../assets/${el.img}`)['default']} alt='card' />
            <div className="product-item-info">
        <h4>{el.title} <span className='title'></span></h4> 
        <p>Price: <span className='title'><strong>{el.price}$</strong></span></p> 
        </div>

        </div>
        <Link to={`/shop/${el.id}`}>
        <button className='product-item-details-btn'>Details</button></Link>
      </div>
    )
  })
  return <div className='shop-container'>{createCardsArray}</div>
}

export default Shop
