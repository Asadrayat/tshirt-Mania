import React from 'react';
import CousineBro from '../CousineBro/CousineBro';
import CousinSis from '../CousineSis/CousinSis';

const Uncle = () => {
    return (
        <div>
            <h4>Uncle</h4>
            <section className='flex'>
                <CousineBro></CousineBro>
                <CousinSis></CousinSis>
            </section>
        </div>
    );
};

export default Uncle;