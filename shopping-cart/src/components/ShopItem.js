import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { phones, images } from './Data'
import { useBasketCleanup } from '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ShopItem = ({ id, setBasketPrice, setCurrentOrder, currentOrder }) => {
  const [itemCount, setItemCount] = useState(1)
  let history = useHistory()

  function handleClick() {
    history.push('/shop')
  }
  function clickBasket(e) {
    e.preventDefault()

    setCurrentOrder([
      ...currentOrder,
      { itemname: phones[id - 1].title, price: phones[id - 1].price, qty: parseInt(itemCount) },
    ])
  }

  useBasketCleanup(setBasketPrice, currentOrder)

  return (
    <div className='product-detail'>
      <div className='product-detail-image'>
        <img src={images[phones[id - 1].img].default} alt='card' />
      </div>
      <div className='product-detail-info'>
        <h1>{phones[id - 1].title}</h1>
        <h4>
          <strong> Price:</strong> <span className='title'>{phones[id - 1].price}$</span>
        </h4>
        <div className='purchase'>
          <form onSubmit={(e) => clickBasket(e)}>
            <label htmlFor='quantity'>Quantity (between 1 and 5):</label>
            <div className='input-container'>
              <input
                role='spinbutton'
                type='number'
                id='quantity'
                min='1'
                max='5'
                value={itemCount}
                onChange={(e) => setItemCount(e.target.value)}
              />
              <button className='btn-shop-item'>  <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>{' '}
              <button type='button' className='btn-shop-item go-back' onClick={handleClick}>
                Go back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShopItem
