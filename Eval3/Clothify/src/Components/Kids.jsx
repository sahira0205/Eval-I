import React from 'react';
import KidsLatestCollection from './KidsLatestCollection';
import MainProductCard from './MainProductCard';
import KidsShopSection from './KidsShopSection';


const Kids = () => {
  const categoryProducts = [
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/colection_tile_copy_OxmWMVF.jpg' },
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection_tile_copy_2_FGyuUvl.jpg' },
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/HELLO-KITTY-KIDS-Collection-tile.jpg' },
  ];

  const mainProducts = [
    {
      name: 'product1',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722670958_7142099.jpg?format=webp&w=300&dpr=1.0',
      altText: 'Born Magical',
      title: 'Born Magical',
      category: 'Girls Cotton T-shirts',
      price: '₹599',
    },
    {
      name: "product2",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1715958736_8680243.jpg?format=webp&w=300&dpr=1.0",
      altText: "Solid Rustic",
      title: "Solid Rustic",
      category: "Boys Cotton Oversized T-shirts",
      price: "₹3457"
    },
    {
      name: "product3",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710919270_8751681.jpg?format=webp&w=300&dpr=1.0",
      altText: "Chasing Rainbow",
      title: "Chasing Rainbow",
      category: "Girls Cotton Tank Tops",
      price: "₹475"
    },
    {
      name: "product4",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713852416_5847320.jpg?format=webp&w=300&dpr=1.0",
      altText: "Spider Man: With Great Powers",
      title: "Spider Man: With Great Powers",
      category: "Boys Cotton T-Shirts",
      price: "₹1879"
    },
    {
      name: "product5",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710521226_3704666.jpg?format=webp&w=300&dpr=1.0",
      altText: "Harry Potter: Free Dobby",
      title: "Harry Potter: Free Dobby",
      category: "Girls Cotton Puff Sleeve Tops",
      price: "₹639"
    },
    {
      name: "product6",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709617124_5452648.jpg?format=webp&w=300&dpr=1.0",
      altText: "Peanuts: Family Tree",
      title: "Peanuts: Family Tree",
      category: "Girls Cotton Crop Tops",
      price: "₹950"
    },
    {
      name: "product7",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708754374_8253849.jpg?format=webp&w=480&dpr=1.0",
      altText: "Spider-Man: NWH Friendly",
      title: "Spider-Man: NWH Friendly",
      category: "Boys Cotton T-Shirt",
      price: "₹520"
    },
    {
      name: "product8",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1723121375_4878671.jpg?format=webp&w=300&dpr=1.0",
      altText: "Hello Kitty: So Cute",
      title: "Hello Kitty: So Cute",
      category: "Girls Cotton T-Shirts",
      price: "₹799"
    },
    {
      name: "product9",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718174208_4633858.jpg?format=webp&w=300&dpr=1.0",
      altText: "Powerful Girls: Girl Power Blossom",
      title: "Powerful Girls: Girl Power Blossom",
      category: "Girls Cotton Sleeve T-Shirts",
      price: "₹1670"
    },
    {
      name: "product10",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718262390_7707118.jpg?format=webp&w=300&dpr=1.0",
      altText: "Marvel Avengers Initiative",
      title: "Marvel Avengers Initiative",
      category: "Boys Cotton T-shirts",
      price: "₹999"
    },
    {
      name: "product11",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722333457_9501462.jpg?format=webp&w=300&dpr=1.0",
      altText: "Plaid: Blue, White",
      title: "Plaid: Blue, White",
      category: "Young Boy T-shirts",
      price: "₹896"
    },
    {
      name: "product12",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711789406_9341085.jpg?format=webp&w=300&dpr=1.0",
      altText: "Space Fun",
      title: "Space Fun",
      category: "Boys Cotton Joggers",
      price: "₹788"
    },
    {
      name: "product13",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721196870_5848826.jpg?format=webp&w=480&dpr=1.0",
      altText: "The Good Dinosaur: Spot And Arlo",
      title: "The Good Dinosaur: Spot And Arlo",
      category: "Boys Cotton T-shirts",
      price: "₹1999"
    },
    {
      name: "product14",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1706243574_6361343.jpg?format=webp&w=480&dpr=1.0",
      altText: "PAW Patrol: Marshall",
      title: "PAW Patrol: Marshall",
      category: "Cotton Linen Shirts",
      price: "₹499"
    },
    {
      name: "product15",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Powerpuff-Girls--Girl-Power-Blossom-Co-ord-set%20(2)2024_06_12-12-20-06.jpg?format=webp&w=480&dpr=1.0",
      altText: "Girl Power Blossom Set",
      title: "Girl Power Blossom Set",
      category: "Women Flared Joggers",
      price: "₹1399"
    },
    {
      name: "product16",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/223079-PEPPA-&-RAINBOWS%20Coord-set-12024_05_06-13-07-48.jpg?format=webp&w=480&dpr=1.0",
      altText: "Rainbow Splash Set",
      title: "Rainbow Splash Set",
      category: "Girls Cotton Co-ord Set",
      price: "₹990"
    },
    {
      name: "product17",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718174248_5226277.jpg?format=webp&w=480&dpr=1.0",
      altText: "Girl Power Bubbles",
      title: "Girl Power Bubbles",
      category: "Girls Cotton Full Sleeve T-shirt",
      price: "₹3979"
    },
    {
      name: "product18",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710914693_1760631.jpg?format=webp&w=480&dpr=1.0",
      altText: "Sugar Blossom",
      title: "Sugar Blossom",
      category: "Girls Cotton Full Sleeve T-shirt",
      price: "₹1299"
    },
    {
      name: "product19",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711789452_6012173.jpg?format=webp&w=300&dpr=1.0",
      altText: "Solid: Black and Green",
      title: "Solid: Black and Green",
      category: "Boys Cotton Joggers",
      price: "₹1899"
    },
     {
    name: "product20",
    imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709968617_5642593.jpg?format=webp&w=480&dpr=1.0 ",
    altText: "Captain America Shield",
    title: "Captain America Shield",
    category: "Boys Cotton T-Shirts",
    price: "₹1399"
  }
  ];

  const goToProduct = (productName) => {
    console.log(`Redirecting to ${productName}`);
  };

  return (
    <div>
      <img src="../../images/kidsectionbanner.png" alt="Women's Section Banner" style={{ width: '100%' }} />
     <KidsLatestCollection/>
      <h2 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', paddingTop: '20px' }}>
      Shop The Look
    </h2>
    <KidsShopSection />
      <h2 className="text-center py-4 font-weight-bold" style={{ fontSize: '50px' }}>Top Selling</h2>
      <div className="main_container products-container p-3">
        {mainProducts.map((product, index) => (
          <MainProductCard key={index} product={product} goToProduct={goToProduct} />
        ))}
      </div>
    </div>
  );
};

export default Kids;


