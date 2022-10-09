import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>House ={house}</small></p>
            <p><small>Money ={money}</small></p>
        </div>
    );
};

export default Aunty;