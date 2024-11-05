import React from 'react';
import ShopCard from './ShopCard';

const products = [
  { id: 1, name: 'T-shirts', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/465196/item/ingoods_18_465196.jpg?width=320' },
  { id: 2, name: 'Shirts', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/469467/item/ingoods_69_469467.jpg?width=320' },
  { id: 3, name: 'Jeans', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/463857/item/ingoods_30_463857.jpg?width=320' },
  { id: 4, name: 'Shorts', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/455533/item/ingoods_57_455533.jpg?width=320' },
  { id: 5, name: 'Jacket', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/470117/item/ingoods_09_470117.jpg?width=320' },
  { id: 6, name: 'Blazers', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448034/item/ingoods_69_448034.jpg?width=320' },
];

function WomenShopSection() {
  return (
    <div className="shopcontainers">
      {products.map(product => (
        <ShopCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default WomenShopSection;
