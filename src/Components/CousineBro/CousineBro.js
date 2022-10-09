import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const CousineBro = () => {
    const [money,setMoney] =useContext(MoneyContext)
    return (
        <div>
            <h4>Cousin Brother</h4>
            <p><small>Money : {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>
                Incrase1k
            </button>
        </div>
    );
};

export default CousineBro;