import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);

    const[cart,setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])

    const handlerAddToCart = (product) =>{
        console.log(product);
        const newCart = [... cart , product];
        setCart(newCart)
    }
    return (
        <div className='shope-container'>
            <div className="product-container">
                {/* <h2>product-UpComing:{products.length}</h2> */}
                {/* using-map */}
                {
                    products.map(product =><Product
                    key={product.id}
                    product = {product}
                    handlerAddToCart= {handlerAddToCart }
                    ></Product>)
                }
            </div>
            {/* order-summary-bar */}
            <div className='cart-container'>
               <Cart cart ={cart}></Cart>              
            </div>
        </div>
    );
};

export default Shop;