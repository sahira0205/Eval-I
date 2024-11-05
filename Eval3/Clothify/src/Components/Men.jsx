import React from 'react';
import MenLatestCollection from './MenLatestCollection';
import MainProductCard from './MainProductCard';
import MenShopSection from './MenShopSection';


const Men = () => {
  const categoryProducts = [
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/colection_tile_copy_OxmWMVF.jpg' },
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection_tile_copy_2_FGyuUvl.jpg' },
    { imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/HELLO-KITTY-KIDS-Collection-tile.jpg' },
  ];

  const mainProducts = [
    {
      name: 'product1',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716362813_4935391.jpg?format=webp&w=300&dpr=1.0',
      altText: 'Solid Black (Cargo)',
      title: 'Solid Black (Cargo)',
      category: 'Men Jeans',
      price: '₹1999',
    },
    {
      name: "product2",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1723461492_9431362.jpg?format=webp&w=300&dpr=1.0",
      title: "Solid Light Beige Straight-Fit Jeans",
      altText: "Solid Light Beige Straight-Fit Jeans",
      
      category: "Men Jeans",
      price: "₹4750"
    },
    {
      name: "product3",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721143294_6703268.jpg?format=webp&w=300&dpr=1.0",
      title: "Garfield Hooded T-Shirt",
      altText: "Garfield Hooded T-Shirt",
     
      category: "Hooded T-Shirts",
      price: "₹1879"
    },
    {
      name: "product4",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711458100_4061856.jpg?format=webp&w=300&dpr=1.0",
      title: "Harry Potter Slytherin Rugby Set",
      altText: "Harry Potter Slytherin Rugby Set",
      
      category: "Hooded T-Shirt",
      price: "₹1500"
    },
    {
      name: "product5",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711004269_1422653.jpg?format=webp&w=300&dpr=1.0",
      title: "Black Panther Wakanda Forever Hooded T-Shirt",
      altText: "Black Panther Wakanda Forever Hooded T-Shirt",
      
      category: "Hooded T-Shirts",
      price: "₹1299"
    },
    {
      name: "product6",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711454240_7696632.jpg?format=webp&w=300&dpr=1.0",
      title: "Iron Man The Invincible Hooded T-Shirt",
      altText: "Iron Man The Invincible Hooded T-Shirt",
  
      category: "Hooded T-Shirts",
      price: "₹1209"
    },
    {
      name: "product7",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719047636_1600439.jpg?format=webp&w=480&dpr=1.0",
      title: "Floral Print Men Shirt",
      altText: "Floral Print Men Shirt",

      category: "Men Shirts",
      price: "₹1299"
    },
    {
      name: "product8",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721480831_5605290.jpg?format=webp&w=300&dpr=1.0",
      title: "Casual Olive Men Trousers",
      altText: "Casual Olive Men Trousers",
   
      category: "Men Trousers",
      price: "₹3250"
    },
    {
      name: "product9",
    imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720876330_7176714.jpg?format=webp&w=300&dpr=1.0",
      title: "Solid Red Joggers",
      altText: "Solid Red Joggers",
     
      category: "Men Joggers",
      price: "₹2399"
    },
    {
      name: "product10",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722006831_1395188.jpg?format=webp&w=300&dpr=1.0",
      title: "Solid Teal Men Shirt",
      altText: "Solid Teal Men Shirt",
 
      category: "Men Shirts",
      price: "₹1699"
    },
    {
      name: "product11",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Untitled-12024_08_13-10-59-31.jpg?format=webp&w=300&dpr=1.0",
      title: "Floral Pattern Men T-Shirt",
      altText: "Floral Pattern Men T-Shirt",
      
      category: "Men T-Shirts",
      price: "₹2100"
    },
    {
      name: "product12",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1727520457_2109541.jpg?format=webp&w=480&dpr=1.0",
      title: "Denim Blue Men Jeans",
      altText: "Denim Blue Men Jeans",
   
      category: "Men Jeans",
      price: "₹4999"
    },
    {
      name: "product13",
     imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1727520457_2109541.jpg?format=webp&w=480&dpr=1.0",
      title: "Striped Short Sleeve Shirt",
      altText: "Striped Short Sleeve Shirt",
      
      category: "Men Shirts",
      price: "₹1499"
    },
    {
      name: "product14",
    imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713860734_6695773.jpg?format=webp&w=300&dpr=1.0",
      title: "Black Solid Casual Trousers",
      altText: "Black Solid Casual Trousers",
  
      category: "Men Trousers",
      price: "₹2499"
    },
    {
      name: "product15",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718007875_7682781.jpg?format=webp&w=300&dpr=1.0",
      title: "Graphic Printed T-Shirt",
      altText: "Graphic Printed T-Shirt",
      
      category: "Men T-Shirts",
      price: "₹999"
    },
    {
      name: "product16",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1727842859_4184960.jpg?format=webp&w=480&dpr=1.0",
      title: "Navy Blue Chinos",
      altText: "Navy Blue Chinos",
     
      category: "Men Chinos",
      price: "₹2799"
    },
    {
      name: "product17",
    imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1723038628_4733596.jpg?format=webp&w=300&dpr=1.0",
      title: "Olive Green Cargo Pants",
      altText: "Olive Green Cargo Pants",
      label: "Olive Green",
      category: "Men Cargo",
      price: "₹3499"
    },
    {
      name: "product18",
    imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1723283848_5622526.jpg?format=webp&w=300&dpr=1.0",
      title: "Classic Black Sweatshirt",
      altText: "Classic Black Sweatshirt",
      label: "Classic Black",
      category: "Men Sweatshirts",
      price: "₹1799"
    },
    {
      name: "product19",
    imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1723461492_9431362.jpg?format=webp&w=300&dpr=1.0",
      title: "Light Grey Pullover",
      altText: "Light Grey Pullover",
      label: "Light Grey",
      category: "Men Sweaters",
      price: "1999"
    },
    {
      name: "product20",
      imageUrl: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718991444_3226591.jpg?format=webp&w=300&dpr=1.0",
      title: "Blue Denim Jacket",
      altText: "Blue Denim Jacket",
      label: "Blue Denim",
      category: "Men Jackets",
      price: "₹2999"
    }
   
  ];

  const goToProduct = (productName) => {
    console.log(`Redirecting to ${productName}`);
  };

  return (
    <div>
      <img src="../../images/mensectionbanner.png" alt="men's Section Banner" style={{ width: '100%' }} />
     <MenLatestCollection/>
      <h2 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center', paddingTop: '20px' }}>
      Shop The Look
    </h2>
    <MenShopSection />
      <h2 className="text-center py-4 font-weight-bold" style={{ fontSize: '50px' }}>Top Selling</h2>
      <div className="main_container products-container p-3">
        {mainProducts.map((product, index) => (
          <MainProductCard key={index} product={product} goToProduct={goToProduct} />
        ))}
      </div>
    </div>
  );
};

export default Men;


