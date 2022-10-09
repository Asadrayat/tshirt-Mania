import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <nav className='header'>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/about">About</Link>
        <Link to="/grandpa">Grandpa</Link>
    </nav>
    );
};

export default Header;