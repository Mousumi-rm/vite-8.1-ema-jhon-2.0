import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])

    const handlerAddToCart = (product) =>{
        console.log(product);
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
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;