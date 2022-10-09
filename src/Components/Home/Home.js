import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart,setCart] = useState([]);
    const handleAddToCart = tShirt =>{
        const exist = cart.find(ts=>ts._id === tShirt._id);
        if(exist){
            alert('Already added')
        }
        else{
            const newCart = [...cart,tShirt];
            setCart(newCart);
        } 
     }
     const handleRemoveItem = tShirt =>{
        const remaining = cart.filter(ts => ts._id !== tShirt._id);
        setCart(remaining);
     }
    return (
        <div className='home-ct'>
            <div className='tshirt'>
            {
                tShirts.map(tShirt => <TShirt
                key={tShirt._id}
                tShirt ={tShirt}
                handleAddToCart = {handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className="cart-ct">
                <Cart
                 cart = {cart}
                 handleRemoveItem = {handleRemoveItem}
                  ></Cart>
            </div>
        </div>

    );
};

export default Home;