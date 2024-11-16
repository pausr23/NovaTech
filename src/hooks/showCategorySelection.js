import { useState } from 'react';

const useCategorySelection = (categories) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const handleCategoryClick = (id) => {
    console.log(`Selected Category ID: ${id}`);
    setSelectedCategoryId(id);
  };

  const filteredCategories = categories.filter(category => category.id === selectedCategoryId);
  const filteredSubcategories = filteredCategories.length > 0 ? filteredCategories[0].subcategories : [];

  return {
    selectedCategoryId,
    handleCategoryClick,
    filteredCategories,
    filteredSubcategories
  };
};

export default useCategorySelection;