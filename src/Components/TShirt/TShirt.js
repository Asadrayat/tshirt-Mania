import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt,handleAddToCart}) => {
    const {name , picture ,price } = tShirt;
    return (
        <div className='tshirt-ct'>
            <img src={picture} alt="" />
            <h1>Name : {name}</h1>
            <p> Price : ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)} className="btn-tshirt" >Add to cart</button>
        </div>
    );
};

export default TShirt;