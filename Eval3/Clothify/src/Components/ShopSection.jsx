import React from 'react';
import ShopCard from './ShopCard';

const products = [
  { id: 1, name: 'Tees', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/467363/item/ingoods_69_467363.jpg?width=320' },
  { id: 2, name: 'WesternWear', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/469338/item/ingoods_36_469338.jpg?width=320' },
  { id: 3, name: 'Jeans', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/470529/item/ingoods_62_470529.jpg?width=320' },
  { id: 4, name: 'T-Shirts', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/467543/item/ingoods_69_467543.jpg?width=320' },
  { id: 5, name: 'Shirt', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/474875/item/ingoods_01_474875.jpg?width=320' },
  { id: 6, name: 'Hoodies', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/454378/item/ingoods_09_454378.jpg?width=320' },
];

function ShopSection() {
  return (
    <div className="shopcontainers">
      {products.map(product => (
        <ShopCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ShopSection;
