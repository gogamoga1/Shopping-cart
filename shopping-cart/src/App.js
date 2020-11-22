import './styles/App.css'
import './styles/Animation.css'
import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Shop from './components/Shop'
import ShopItem from './components/ShopItem'
import Products from './components/Products'

import { Route, Switch, useRouteMatch } from 'react-router-dom'

export function useBasketCleanup(setBasketPrice, currentOrder) {
  useEffect(() => {
    setBasketPrice(
      currentOrder.reduce((acc, curVal) => {
        return (acc += curVal.price * curVal.qty)
      }, 0)
    )
  }, [currentOrder])
}
function App() {
  const [basketPrice, setBasketPrice] = useState(0)
  const [currentOrder, setCurrentOrder] = useState([])

  const match = useRouteMatch('/shop/:id')

  const clearBasket = () => {
    setCurrentOrder([])
    setBasketPrice(0)
  }

  return (
    <div className='App'>
      <Nav basketPrice={basketPrice} currentOrder={currentOrder} />

      <Switch>
        <Route path='/shop/:id'>
          <ShopItem
            id={match ? match.params.id : null}
            setBasketPrice={setBasketPrice}
            currentOrder={currentOrder}
            setCurrentOrder={setCurrentOrder}
          />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/products'>
          <Products
            currentOrder={currentOrder}
            clearBasket={clearBasket}
            setBasketPrice={setBasketPrice}
            basketPrice={basketPrice}
            setCurrentOrder={setCurrentOrder}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
