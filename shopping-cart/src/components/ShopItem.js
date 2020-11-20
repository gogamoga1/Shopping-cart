import React, {useState} from 'react'
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom'
import { phones } from './Data'

const ShopItem = ({ id, setBasketPrice, setCurrentOrder, currentOrder }) => {

  const [itemCount, setItemCount] = useState(1)
  let history = useHistory()

  function handleClick() {
    history.push('/shop')
  }
  function clickBasket(e) {
    e.preventDefault();
    setBasketPrice(preValue => preValue + (phones[id - 1].price * itemCount ))
    setCurrentOrder([...currentOrder, {itemname: phones[id - 1].title, price: phones[id - 1].price, qty: itemCount }])
    console.log(currentOrder);
  }

  return (
    <div className='product-detail'>
      <div className='product-detail-image'>
        <img src={require(`../assets/${phones[id - 1].img}`)['default']} alt='card' />
      </div>
      <div className='product-detail-info'>
        <h4>
          Title: <span className='title'>{phones[id - 1].title}</span>
        </h4>
        <h4>
          Price: <span className='title'>{phones[id - 1].price}$</span>
        </h4>
        <button type='button' onClick={handleClick}>
          Go back
        </button>
        <div className='purchase'>

          <form onSubmit={(e) => clickBasket(e)}>
          <label htmlFor="quantity">Quantity (between 1 and 5):</label>
          <input role='spinbutton' type='number' id='quantity' min='1' max='5' value={itemCount} onChange={(e) => setItemCount(e.target.value)} />
          <button >Add to cart</button>{' '}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShopItem
