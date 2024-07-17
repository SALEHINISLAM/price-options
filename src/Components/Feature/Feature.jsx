import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Feature = ({feature}) => {
    return (
        <li className='text-left flex items-center gap-1 text-xl mb-2'>
            <IoMdCheckmarkCircleOutline /> 
            {feature}
        </li>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
};

export default Feature;