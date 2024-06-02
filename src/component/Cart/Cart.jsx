import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
//  const cart = props.cart;
// const {cart} = props;
let totalPrice = 0;
let totalShipping = 0;
for(const product of cart){
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
}
 const totalTax = totalPrice*7/100;
 const grandTotal = totalPrice + totalShipping + totalTax;
    
    return (
        <div>
            <h5 className='order-summary-bar'>Order Summary</h5>
            <p className='p-tag'>Selected Item:{ cart.length}</p>
            <p className='p-tag'>Total Price:${totalPrice}</p>
            <p className='p-tag'>Total Shipping Charge: ${totalShipping}</p>
            <p className='p-tag'>Tax: ${totalTax.toFixed(2)}</p>
            <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <div className='button-container'>
                <button className='btn-red'>Clear Cart</button>
                <button className='btn-yellow'>Proceed Check</button>
            </div>
        </div>  
    );
};

export default Cart;