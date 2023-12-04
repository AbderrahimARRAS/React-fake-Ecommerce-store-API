import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { cart_icon } from '../assets';
import { redirect, useNavigate } from 'react-router-dom';

function Cart() {
    const {cart,setCart} = useContext(CartContext);
    const navigate = useNavigate();
    const [total,setTotal] = useState(0);
    console.log(cart);

    useEffect(() => {
        const sumTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(sumTotal);
    },[cart]);
    
    const CartGrid = ({ products }) => (
        <div className="cart-product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title} (x{product.quantity})</h3>
              <p>{product.price*product.quantity} €</p>
              <button onClick={()=>{
                setCart(cart.filter(item => item.id != product.id))
                }}>Remove</button>
            </div>
          ))}
        </div>
      );

  return (
   <section className='cart-section'>
         <nav className='navbar'>
            <p className='logo' onClick={()=>navigate("/")}>RAHIMSHOP</p>
            <ul className='navbar-items'>
                <li className='navbar-item'  onClick={()=>navigate("/")}>Home</li>
                <li className='navbar-item'>Adresse</li>
                <li className='navbar-item'>Contact</li>
            </ul>
            <div className='cart-icon' onClick={()=>navigate("/Cart")}>
                <img src={cart_icon} alt="" />
                <div className='cart-icon-objects'>{cart.length}</div>
            </div>
        </nav>

        {cart.length > 0 ? (
        <CartGrid products={cart} />
      ) : (
        
       <h1 className="total-price">
        {total>0 ? "Total : "+total+" $" : "EMPTY!"}
      </h1>
      )}
      
      
      
     
      
   </section>
  )
}

export default Cart