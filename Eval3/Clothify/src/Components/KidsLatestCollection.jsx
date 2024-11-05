import React from 'react';
import CategoryProductCard from './CategoryProductCard';

const latestCollectionImages = [
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection_tile_copy_VNyoOPk.jpg?format=webp&w=480&dpr=1.5",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile_j3DCy30.png?format=webp&w=480&dpr=1.5",
  "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_mXhi6QF.jpg?format=webp&w=480&dpr=1.5"
];

function KidsLatestCollection() {
  return (
    <>
    <h2 className="text-center py-4 font-weight-bold" style={{ fontSize: '50px' }}>Latest Collection</h2>
    <div className="container">
      <div className="row justify-content-center">
        {latestCollectionImages.map((imageUrl, index) => (
          <CategoryProductCard key={index} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
    </>
  );
}

export default KidsLatestCollection;
