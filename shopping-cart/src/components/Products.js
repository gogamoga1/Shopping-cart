import Table from 'react-bootstrap/Table'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useBasketCleanup } from '../App.js'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Products = ({ currentOrder, clearBasket, basketPrice, setCurrentOrder, setBasketPrice }) => {
  const removeItem = (passedIdx) => {
    setCurrentOrder((prevValue) => prevValue.filter((item, idx) => idx !== passedIdx))
  }
  useBasketCleanup(setBasketPrice, currentOrder)

  return (
    <>{currentOrder.length >= 1 ? <div className='checkout-overview'>
        <h2 className='checkout-header'>Cart overview:</h2>
        <button onClick={clearBasket} className='btn-clear-basket'>
          Clear basket
        </button>
         <Table striped bordered hover>
          <table>
            <thead>
              <tr>
                <th>Phone</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove item</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.map((el, idx) => {
                return (
                  <tr key={idx}>
                    <td>{el.itemname} </td>
                    <td>{el.price}</td>
                    <td>{el.qty}</td>
                    <td>{el.qty * el.price}$</td>
                    <td>
                      {' '}
                      <FontAwesomeIcon icon={faTrash} onClick={() => removeItem(idx)} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Table> 
      </div>
      : <div className='empty-basket'><h2>Basket is empty..</h2></div>}
      <footer className='checkout'>
        <p className='checkout-p'>Total: {basketPrice}$ </p>
        <input type='button' className='button' value='Checkout' />
      </footer>
    </>
  )
}

export default Products
