import React from 'react';
import WomenLatestCollection from './WomenLatestCollection';
import MainProductCard from './MainProductCard';
import WomenShopSection from './WomenShopSection';


const Women = () => {
  const categoryProducts = [
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/colection_tile_copy_OxmWMVF.jpg' },
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection_tile_copy_2_FGyuUvl.jpg' },
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/HELLO-KITTY-KIDS-Collection-tile.jpg' },
  ];

  const mainProducts = [
    {
      name: 'product1',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713781292_1126705.jpg',
      altText: 'Cotton Linen: Lavender',
      title: 'Cotton Linen: Lavender',
      category: 'T-Shirts',
      price: '₹5649',
    },
    {
      name: 'product2',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718724725_7185220.jpg',
      altText: 'Parachute Jeans: Ice Blue',
      title: 'Parachute Jeans: Ice Blue',
      category: 'Women Jeans',
      price: '₹3659',
    },
    {
      name: 'product3',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719209672_5787014.jpg',
      altText: 'Corduroy Pants: Peachy Pink',
      title: 'Corduroy Pants: Peachy Pink',
      category: 'Women Pants',
      price: '₹4750',
    },
    {
      name: 'product4',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722340949_8759061.jpg',
      altText: 'Royal Purple',
      title: 'Royal Purple',
      category: 'T-Shirts',
      price: '₹3869',
    },
    {
      name: 'product5',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719902491_4341376.jpg',
      altText: 'Denim: Graffiti (Baggy Fit)',
      title: 'Denim: Graffiti (Baggy Fit)',
      category: 'Women Jeans (Baggy Fit)',
      price: '₹7639',
    },
    {
      name: 'product6',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711704060_3673953.jpg',
      altText: 'Solids: Hot Pink',
      title: 'Solids: Hot Pink',
      category: 'T-Shirts',
      price: '₹4950',
    },
    {
      name: 'product7',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1714046861_3561134.jpg',
      altText: 'Solids: Blue Stripes',
      title: 'Solids: Blue Stripes',
      category: 'T-Shirts',
      price: '₹6209',
    },
    {
      name: 'product8',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1714046295_1152402.jpg',
      altText: 'Solids: Peach Stripes',
      title: 'Solids: Peach Stripes',
      category: 'T-Shirts',
      price: '₹6799',
    },
    {
      name: 'product9',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721458207_1698157.jpg',
      altText: 'Pink Panther: XOXO',
      title: 'Pink Panther: XOXO',
      category: 'T-Shirts',
      price: '₹5670',
    },
    {
      name: 'product10',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715602848_7314467.png',
      altText: 'Cotton Linen: Lime',
      title: 'Cotton Linen: Lime',
      category: 'T-Shirts',
      price: '₹5648',
    },
    {
      name: 'product11',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719415124_8433363.jpg',
      altText: 'Carrot Fit Pant: Light Blue',
      title: 'Carrot Fit Pant: Light Blue',
      category: 'Women Pants',
      price: '₹3896',
    },
    {
      name: 'product12',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720857544_2543718.jpg',
      altText: 'Textured Shirt: Spiced Plum (Solids)',
      title: 'Textured Shirt: Spiced Plum (Solids)',
      category: 'Cotton Co-ord Set',
      price: '₹3967',
    },
    {
      name: 'product13',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722511644_3702485.jpg',
      altText: 'Ribbed Pants: Charcoal (Solids)',
      title: 'Ribbed Pants: Charcoal (Solids)',
      category: 'Women Pants',
      price: '₹5999',
    },
    {
      name: 'product14',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1712570896_3385545.jpg',
      altText: 'Disney: Alice In Wonderland',
      title: 'Disney: Alice In Wonderland',
      category: 'T-Shirts',
      price: '₹3799',
    },
    {
      name: 'product15',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1681814930_6183239.jpg',
      altText: 'Solids: Mushroom',
      title: 'Solids: Mushroom',
      category: 'Women Flared Joggers',
      price: '₹4529',
    },
    {
      name: 'product16',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715666398_3393417.png',
      altText: 'Miss Joaquim',
      title: 'Miss Joaquim',
      category: 'T-Shirts',
      price: '₹5490',
    },
    {
      name: 'product17',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719638592_9959926.jpg',
      altText: 'Shades of Marlin',
      title: 'Shades of Marlin',
      category: 'Women Jeans',
      price: '₹3979',
    },
    {
      name: 'product18',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715670455_7376733.png',
      altText: 'Solids: Electric Blue',
      title: 'Solids: Electric Blue',
      category: 'T-Shirts',
      price: '₹3979',
    },
    {
      name: 'product19',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711539798_1918283.jpg',
      altText: 'Solids: Plum',
      title: 'Solids: Plum',
      category: 'Cotton Co-ord Set',
      price: '₹2999',
    },
    {
      name: 'product20',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1723867641_6972783.jpg',
      altText: 'Solids: Sky Blue',
      title: 'Solids: Sky Blue',
      category: 'Women Denim Shorts',
      price: '₹3799',
    },
  ];

  const goToProduct = (productName) => {
    console.log(`Redirecting to ${productName}`);
  };

  return (
    <div>
      <img src="images/womensectionbanner.jpeg" alt="Women's Section Banner" style={{ width: '100%' }} />
     <WomenLatestCollection/>
      <h2 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', paddingTop: '20px' }}>
      Shop The Look
    </h2>
    <WomenShopSection />
      <h2 className="text-center py-4 font-weight-bold" style={{ fontSize: '50px' }}>Top Selling</h2>
      <div className="main_container products-container p-3">
        {mainProducts.map((product, index) => (
          <MainProductCard key={index} product={product} goToProduct={goToProduct} />
        ))}
      </div>
    </div>
  );
};

export default Women;


