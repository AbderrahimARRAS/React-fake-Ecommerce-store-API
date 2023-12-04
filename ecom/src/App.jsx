import {Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import { useState } from 'react'
import { CartContext } from './context/CartContext'
import Cart from './pages/Cart'


function App() {
  const [cart,setCart] = useState([]);

  return (
      <CartContext.Provider value={{cart,setCart}}>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
            <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </CartContext.Provider>
  )
}

export default App
