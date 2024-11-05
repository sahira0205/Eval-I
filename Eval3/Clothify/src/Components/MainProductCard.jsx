import React from 'react';

const MainProductCard = ({ product, goToProduct }) => (
  <div className="main_card product-container product" data-name={product.name}>
    <div className="main_img" onClick={() => goToProduct(product.name)}>
      <img src={product.imageUrl} alt={product.altText} />
    </div>
    <div className="content">
      <p className="TSS">{product.title}</p>
      <hr className="my-0" />
      <p className="my-0">{product.category}</p>
      <p>{product.price}</p>
    </div>
  </div>
);

export default MainProductCard;
