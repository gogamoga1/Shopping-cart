import React from 'react'
import { phones } from './Data'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function compare_price(a, b) {
  // sort by price
  if (a.price < b.price) {
    return -1
  } else if (a.price > b.price) {
    return 1
  } else {
    return 0
  }
}

const Shop = () => {
  const createCardsArray = [...phones].sort(compare_price).map((el) => {
    return (
      <div className='product-item' data-id={el.id} key={el.id}>
        <div className='product-item-container'>
          <img
            className='product-item-img'
            src={require(`../assets/${el.img}`)['default']}
            alt='card'
          />
          <div className='product-item-info'>
            <h4>
              <span className='title'>
                <strong>{el.title}</strong>
              </span>
            </h4>
            <p>
              Price:{' '}
              <span className='title'>
                <strong>{el.price}$</strong>
              </span>
            </p>
          </div>
        </div>
        <Link to={`/shop/${el.id}`}>
          <Button variant='contained' color='default'>
            Details
          </Button>
        </Link>
      </div>
    )
  })
  return <div className='shop-container'>{createCardsArray}</div>
}

export default Shop
