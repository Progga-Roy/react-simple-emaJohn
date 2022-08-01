import React from 'react';
import logo from '../images/Logo.svg'
import './Header/Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav className='nav'>
            <a href="/shop">Shop</a>
            <a href="/Orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/log in">Log in</a>
            </nav>
        </div>
    );
};

export default Header;