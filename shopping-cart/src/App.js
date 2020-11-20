import './styles/App.css'
import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Shop from './components/Shop'
import ShopItem from './components/ShopItem'
import Products from './components/Products'

import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom'

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
      <Nav basketPrice={basketPrice} />
      
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
          <Products currentOrder={currentOrder} clearBasket={clearBasket} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
