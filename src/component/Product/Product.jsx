import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ( {product,handleAddToCart}) => {
    const {img, name, price,seller, ratings} = product;
    // const {product,handleAddToCart} = props;
  
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
             <div className='product-infos'>
             <p >Price :{price}</p>
            <p>Manufacture: {seller}</p>
            <p className='rating'>Ratings :{ratings} star</p>
             </div>
           </div>
            <button className='button' onClick={()=>handleAddToCart(product)}>   Add to Cart
            <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;