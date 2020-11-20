import React from 'react'

const Products = ({ currentOrder, clearBasket }) => {



  return (
    <div className='checkout-overview'>
      <h2 className='checkout-header'>Cart overview:</h2>
      <button onClick={clearBasket}>Clear basket</button>
      <table>
        <thead>
          <tr>
            <th>Phone</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {currentOrder.map((el, idx) => {
            return (
              <tr key={idx}>
                <td >{el.itemname} </td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
                <td>{el.qty * el.price}$</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products
