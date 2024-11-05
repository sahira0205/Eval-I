import React from 'react';

const CategoryProductCard = ({ imageUrl }) => (
    <div className="col-md-4 col-sm-6 col-12 mb-3">
    <img src={imageUrl} className="img-fluid" alt="Category Product" />
  </div>
    
);

export default CategoryProductCard;

