import React from 'react';
const CategoryButton = ({ id, name, onCategoryClick }) => {
    return (
        <button className='border-4 text-xl py-[1vh] px-[5vw] rounded-[2vw] width-full hover:bg-[#f5f5f5] hover:border-[#16161A] hover:text-[#16161A] ' onClick={() => onCategoryClick(id)}>
            {name}
        </button>
    );
};

export default CategoryButton;


