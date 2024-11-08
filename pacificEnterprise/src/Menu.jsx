import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import CategoryButton from './components/CategoryButton.jsx';
import useFetchData from './hooks/useFetchData.js';
import useCategorySelection from './hooks/showCategorySelection.js';

function Menu() {
  
  const { dishes, categories } = useFetchData(
    'https://admin.pacificenterprise.org/api/dishes/all',
    'https://admin.pacificenterprise.org/api/categories'
  );

  const {
    selectedCategoryId,
    handleCategoryClick,
    filteredCategories,
    filteredSubcategories
  } = useCategorySelection(categories);

return (
  <>
    <h1 className='text-center text-5xl font-bold'>Menu</h1>
    <div className='mx-[5%] my-[2%]'>
      <div className='flex justify-center mb-[8rem] gap-x-[1%]'>
        {categories.map(category => (
          <CategoryButton
            key={category.id}
            id={category.id}
            name={category.name}
            onCategoryClick={handleCategoryClick}
          />
        ))}
      </div>
      <div>
        {filteredSubcategories.map(subcategory => (
          <div className='' key={subcategory.id}>
            <div className='flex flex-col items-center'>
              <hr className='w-[50%] h-[2px] bg-white mb-4' />
              <h1 className='font-bold text-white text-3xl'>
                {subcategory.name}
              </h1>
              <hr className='w-[50%] h-[2px] bg-white mt-4' />
            </div>
            <div className='flex overflow-x-scroll xl:overflow-visible gap-[1rem] w-[calc(100vw-10%)] xl:grid grid-rows-1 xl:grid-cols-3 lg:gap-[3rem] my-[5rem] xl:my-[10rem]'>
              {dishes
                .filter(dish => dish.subcategory_id === subcategory.id)
                .map(dish => (
                  <Card
                    key={dish.id}
                    image={dish.image}
                    title={dish.title}
                    price={dish.sale_price}
                    description={dish.description}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);
}

export default Menu;
