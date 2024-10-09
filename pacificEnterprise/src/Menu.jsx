import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import CategoryButton from './components/CategoryButton.jsx';

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  useEffect(() => {
    Promise.all([
      fetch('http://pacificenterprise-produccion.test/api/dishes/all').then(response => response.json()),
      fetch('http://pacificenterprise-produccion.test/api/categories').then(response => response.json())
    ])
      .then(([dishesData, categoriesData]) => {
        setDishes(dishesData);
        setCategories(categoriesData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCategoryClick = (id) => {
    console.log(`Selected Category ID: ${id}`);
    setSelectedCategoryId(id);
  };
  const filteredCategories = categories.filter(category => category.id === selectedCategoryId);
  const filteredSubcategories = filteredCategories.length > 0 ? filteredCategories[0].subcategories : [];



  return (
    <>
      <h1 className='text-center text-4xl'>Menu</h1>
      <div className='mx-[5%] my-[2%]'>
        <div className='flex justify-center mb-[10rem] gap-x-[1%]'>
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
              <div className='flex justify-center items-center'>
                <h1 className='font-bold text-white text-3xl'>{subcategory.name}</h1>
              </div>
              <div className='flex overflow-x-scroll xl:overflow-visible gap-[1rem] w-[calc(100vw-10%)] xl:grid grid-rows-1 xl:grid-cols-3 lg:gap-[3rem] my-[5rem] xl:my-[10rem]'>
                {dishes
                  .filter(dish => dish.subcategory_id === subcategory.id)
                  .map(dish => (
                    <Card
                      key={dish.id}
                      image={dish.image}
                      title={dish.title}
                      price={dish.dish_price}
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
  )
}

export default Menu