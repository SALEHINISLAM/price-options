import React from 'react';
import PropTypes from 'prop-types';

const Feature = ({feature}) => {
    return (
        <li className='text-left'>
            {feature}
        </li>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
};

export default Feature;