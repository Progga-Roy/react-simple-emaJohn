import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
   
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    const handleAddToCart =(product)=>{
        console.log(product)
        const newCart = [...carts,product]
        setCarts(newCart)
      }
    return (
        <div className='shop'>
           
            <div className="shopping-container">
               {
                  products.map(product =><Product key ={product.key} product={product} handleAddToCart={handleAddToCart} ></Product>)
               }
            </div>
            <div className="oder-container">
                <h1>Order Summary</h1>
                {/* {
                    carts.map(cart=> )
                } */}
                <p>Selected Item : {carts.length}</p>
                <p>Total Price :</p>
            </div>
        </div>
    );
};

export default Shop;