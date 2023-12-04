import React, { useContext } from 'react'
import { cart_icon, webShoping } from '../assets'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

function Page() {

  const {cart,setCart} = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <section className='Page'>
        <nav className='navbar'>
            <p className='logo' onClick={()=>navigate("/")}>RAHIMSHOP</p>
            <ul className='navbar-items'>
                <li className='navbar-item'>Home</li>
                <li className='navbar-item'>Adresse</li>
                <li className='navbar-item'>Contact</li>
            </ul>
            <div className='cart-icon' onClick={()=>navigate("/Cart")}>
                <img src={cart_icon} alt="" />
                <div className='cart-icon-objects'>{cart.length}</div>
            </div>
        </nav>
        <div className='Page-content'>
          <div className="content">
            <div className='Page-text'>
              <h1>Shopping</h1>
              <p>................................ONLINE</p>
            </div>
            <button className='Pagetext'>LOGIN</button>
            
          </div>
          <div className="Page-img">
                <img src={webShoping} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Page