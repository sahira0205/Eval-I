import React from 'react';
import ShopCard from './ShopCard';

const products = [
  { id: 1, name: 'T-shirts', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/475127/item/ingoods_00_475127.jpg?width=320' },
  { id: 2, name: 'Shirts', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/469438/item/ingoods_67_469438.jpg?width=320' },
  { id: 3, name: 'Jeans', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/469816/item/ingoods_64_469816.jpg?width=648' },
  { id: 4, name: 'Sports Wear', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/455942/item/ingoods_56_455942.jpg?width=320' },
  { id: 5, name: 'Blazers', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/469908/item/ingoods_56_469908.jpg?width=320' },
  { id: 6, name: 'Knit Wear', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/475462/item/ingoods_09_475462.jpg?width=320' },
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
