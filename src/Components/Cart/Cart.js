import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveItem }) => {
    return (
        <div>
            <h1 className={cart.length === 2 ? `orange` : 'purple'}>Order summery</h1>
            <h4 className={`bold ${cart.length ===2 ? 'green' : 'yellow'}`}>Order quantity : {cart.length}</h4>
            {
                cart.map(tShirt => <p
                key={tShirt._id}
                >{tShirt.name}
                <button onClick={() =>handleRemoveItem(tShirt)}>X</button>
                </p>)
            }
            {
                cart.length === 0 ? <p>Please buy atleast one!!!</p> : <p>Thanks for buying..</p>
            }
            {
                cart.length === 7 && <h1>You are MVP</h1>
            }
        </div>
    );
};

export default Cart;