import { useState, useEffect } from 'react';

const useFetchData = (dishesUrl, categoriesUrl) => {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(dishesUrl).then(response => response.json()),
      fetch(categoriesUrl).then(response => response.json())
    ])
      .then(([dishesData, categoriesData]) => {
        setDishes(dishesData);
        setCategories(categoriesData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [dishesUrl, categoriesUrl]);

  return { dishes, categories };
};

export default useFetchData;