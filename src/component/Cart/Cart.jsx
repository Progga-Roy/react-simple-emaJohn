import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
  
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tex = total*0.1;
    const grandTotal = total + shipping + tex;
    return (
        <div className='cart'>
             <h5 className='order-title'>Order Summary</h5>
              
               <div className='order-detail'>
               <p>Selected Item : {cart.length} </p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: {(tex).toFixed(2)}</p>
                <p>Grand Total : {grandTotal}</p>
                </div>
        </div>
    );
};

export default Cart;