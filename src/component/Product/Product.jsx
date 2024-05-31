import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const{
        img,
        name,
        seller,
        ratings,
        price
    }=props.product;
    return (
        <div className='product'>
            <div>
              <img className='img-tag' src={img} alt="" />
            </div>
            
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='price-tag'>Price:${price}</p>
                <p className='small'>Manufacturer :{seller}</p>
                <p className='small'>Rating-Number :{ratings}Stars</p>
            </div>
                <button className='bts-cart'>Add to Cart</button>  
        </div>
    );
};

export default Product;