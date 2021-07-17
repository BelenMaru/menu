// jshint esversion:6
import React from 'react';

const Categories = ({categories,filterItems}) => {
  return (
  <div className="btn-container">
  {categories.map((category,index)=>{
return <buttton type="button" className="filter-btn" key={index}
onClick={()=>filterItems(category)}
>
  {category}
</buttton>
  })}
  </div>
  );
};

export default Categories;
