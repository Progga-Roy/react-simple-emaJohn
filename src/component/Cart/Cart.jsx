import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
             <h5 className='order-title'>Order Summary</h5>
              
               <div className='order-detail'>
               <p>Selected Item : {cart.length} </p>
                <p>Total Price :</p>
                </div>
        </div>
    );
};

export default Cart;