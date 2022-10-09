import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext = createContext('GoldRing');
export const MoneyContext = createContext('Money bhai')
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    const ring = 'Diamond Ring';
    return (
        <RingContext.Provider value={[house, setHouse]} >
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h1>This is Grandpa</h1>
                    <section className='flex'>
                        <Father house={house} ring={ring}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>

                </div >
            </MoneyContext.Provider>

        </RingContext.Provider>


    );
};

export default Grandpa;