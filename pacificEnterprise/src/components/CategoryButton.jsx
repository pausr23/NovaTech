import React from 'react';
const CategoryButton = ({ id, name, onCategoryClick }) => {
    return (
        <button onClick={() => onCategoryClick(id)}>
            {name}
        </button>
    );
};

export default CategoryButton;


