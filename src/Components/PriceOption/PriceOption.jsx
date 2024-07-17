import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features}=option;
    return (
        <div className='bg-blue-600 rounded-xl p-4 text-white text-center space-y-4 flex flex-col'>
            <h2 className='text-6xl font-bold'>
                ${price}
                <span className='text-2xl'>
                    /mon
                </span>
            </h2>
            <h3 className='text-3xl my-8'>{name}</h3>
            <ul className='px-3 flex-grow'>
                {
                    features.map((feature, index)=><Feature key={index} feature={feature}></Feature>)
                }
            </ul>
            <button className='mt-8 bg-green-800 w-full rounded-full py-3 font-bold text-xl hover:bg-green-400'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;