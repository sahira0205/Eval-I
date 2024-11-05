// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.img} alt="Product" className="product-image" />
            <div className="product-info">
                <h2 className="product-price">{product.price}</h2>
                <button className="shop-now-btn">Shop Now</button>
            </div>
        </div>
    );
};

export default ProductCard;

