import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import CategoryButton from './components/CategoryButton.jsx';

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

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
    // Aquí puedes agregar la lógica para filtrar los platos por categoría
  };

  const filteredCategories = categories.filter(category => category.id === selectedCategoryId);
  const filteredSubcategories = filteredCategories.length > 0 ? filteredCategories[0].subcategories : [];



  return (
    <>
      <h1 className='text-center'>Menu</h1>
      <div className='mx-[5%]'>
        <div className='flex justify-center mb-4'>
          {categories.map(category => (
            <CategoryButton
              key={category.id}
              id={category.id}
              name={category.name}
              onCategoryClick={handleCategoryClick}
            />
          ))}
        </div>
        {filteredSubcategories.map(subcategory => (
          <div className='my-[10rem]' key={subcategory.id}>
            <h1>{subcategory.name}</h1>
            <div className='grid grid-cols-3 gap-x-[2%] gap-y-[5%]'>
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
      <Footer />
    </>
  )
}

export default Menu