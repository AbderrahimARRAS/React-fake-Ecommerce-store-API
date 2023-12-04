import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const {cart,setCart} = useContext(CartContext);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(response => {
                return response.json()
            })
            .then(data => {
                setProducts(data)
            })
            }, []);

    console.log(products);

    const ProductGrid = ({ products }) => (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item"  >
              <img src={product.image} alt={product.title} onClick={() => {navigate(`/ProductDetails/${product.id}`)}}/>
              <h3 onClick={() => {navigate(`/ProductDetails/${product.id}`)}}>{product.title}</h3>
              <p>{product.price} €</p>
              <button onClick={()=> {
                const isInCart = cart.some(item => item.id === product.id);
                !isInCart?
                setCart([...cart,{id:product.id, title: product.title, price: product.price, image: product.image, quantity: 1}])
                :
                setCart(
                  cart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                  )
                )
                }}>Add to cart</button>
            </div>
          ))}
        </div>
      );

  return (
    <section className='products-section'>
        
        {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div>
        </div>
       
      )}
    </section>
  )
}

export default Products