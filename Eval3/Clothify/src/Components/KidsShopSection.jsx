import React from 'react'
import ShopCard from './ShopCard';
const KidsShopSection = () => {
  const products = [
    { id: 1, name: 'T-shirts', img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722670958_7142099.jpg?format=webp&w=300&dpr=1.0' },
    { id: 2, name: 'Dresses', img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710521226_3704666.jpg?format=webp&w=300&dpr=1.0' },
    { id: 3, name: 'Jeans', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/454383/item/ingoods_09_454383.jpg?width=320' },
    { id: 4, name: 'Skirts', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/472706/item/ingoods_16_472706.jpg?width=320' },
    { id: 5, name: 'Jackets', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/460160/item/ingoods_09_460160.jpg?width=320' },
    { id: 6, name: 'Co-Ord Sets', img: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/472709/item/ingoods_09_472709.jpg?width=320' },
  ];
  return (
   <>
    <div className="shopcontainers">
      {products.map(product => (
        <ShopCard key={product.id} product={product} />
      ))}
    </div>
   </>
  )
}

export default KidsShopSection