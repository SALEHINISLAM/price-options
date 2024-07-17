import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features}=option;
    return (
        <div className='bg-blue-600 rounded-xl p-4 text-white text-center space-y-4'>
            <h2 className='text-6xl'>
                ${price}
                <span className='text-2xl'>
                    mon
                </span>
            </h2>
            <h3 className='text-3xl my-8'>{name}</h3>
            <ul className='list-decimal px-3'>
                {
                    features.map((feature, index)=><Feature key={index} feature={feature}></Feature>)
                }
            </ul>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;