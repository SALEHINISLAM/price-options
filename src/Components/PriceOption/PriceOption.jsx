import React from 'react';
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {name, price, features}=option;
    return (
        <div className='bg-blue-600 rounded-xl p-4 text-white text-center'>
            <h2 className='text-6xl'>
                ${price}
                <span className='text-2xl'>
                    mon
                </span>
            </h2>
            <h3 className='text-3xl'>{name}</h3>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;