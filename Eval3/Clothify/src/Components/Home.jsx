import React from 'react';
import Banner from './Banner';
import ShopSection from './ShopSection';
import SaleSection from './SaleSection';
import Carousel from './Carousel';
import ProductSection from './ProductSection';

const Home = () => (
  <div>
    <Banner />
    <ShopSection />
    <ProductSection />
    <SaleSection />
    <Carousel />
  </div>
);

export default Home;
