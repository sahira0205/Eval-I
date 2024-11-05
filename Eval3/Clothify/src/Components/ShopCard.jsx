import React from 'react';

function ShopCard({ product }) {
  return (
    <div className="shopcard">
      <img src={product.img} alt={product.name} className="prd-image" />
      <div className="info">
        <h2 className="name">{product.name}</h2>
      </div>
    </div>
  );
}

export default ShopCard;
