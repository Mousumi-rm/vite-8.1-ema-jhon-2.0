import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const{img,name,seller,ratings,price}=props.product;
    const handlerAddToCart = props.handlerAddToCart ;
    
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
                <button className='bts-cart' onClick={()=>handlerAddToCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>  
        </div>
    );
};

export default Product;