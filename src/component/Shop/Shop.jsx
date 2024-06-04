import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=  useState([]);
    const[cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const  saveCart = [];
     //step1: ger the id of the addedProduct with the loop(for-in)
        for(const id in storedCart){
     //step2:get product from product state by using id with ((find)
     //   it give only a data for the product of so many  )  
        const addedProduct = products.find(product=>product.id === id); 
     // step3:add the quantity:(using condition (if))
    if(addedProduct){
        const quantity = storedCart[id];
         addedProduct.quantity = quantity; 
     //step4:add the addedProduct to the our saved cart (saveCart) 
    //  it must be stay inside the loop(saveCart.push(addedProduct);) 
        saveCart.push(addedProduct);
    }
     // console.log('addedProduct',addedProduct)
     // step5: set the cart
        setCart(saveCart)
        }
        
    },[products])

    // one more copy :
    // useEffect( () =>{
    //     const storedCart = getShoppingCart();
    //     console.log(storedCart)
    //     // const savedCart = [];
    //     // for (const id in storedCart){
    //     //     const addedProduct = products.find(product => product.id === id);
    //     //     if(addedProduct) {
    //     //         const quantity = storedCart[id];
    //     //         addedProduct.quantity = quantity;
    //     //         savedCart.push(addedProduct);
    //     //     }
    //     //     console.log('addedProduct',addedProduct);
    //     // }
    //     // setCart(savedCart)
         
    // },[products])


    const handlerAddToCart = (product) =>{
        // console.log(product);
        const newCart = [... cart , product];
        setCart(newCart);
        addToDb(product.id); 
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