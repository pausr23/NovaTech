import React from 'react';
import PropTypes from 'prop-types';

const CategoryButton = ({ id, name, onCategoryClick }) => {
    return (
        <button
            className='text-sm px-[.5rem] border-4 lg:text-xl py-[1vh] lg:px-[5vw] rounded-[2vw] width-full hover:bg-[#f5f5f5] hover:border-[#16161A] hover:text-[#16161A]'
            onClick={() => onCategoryClick(id)}
        >
            {name}
        </button>
    );
};

CategoryButton.propTypes = {
    id: PropTypes.number.isRequired,       
    name: PropTypes.string.isRequired,   
    onCategoryClick: PropTypes.func.isRequired, 
};

export default CategoryButton;


