import React from 'react';

function CategoryFilter() {
  const categories: string[] = ['All', 'Food', 'Services', 'Grocery'];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
