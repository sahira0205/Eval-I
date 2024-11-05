// ProductSection.jsx
import React from 'react';
import ProductCard from './ProductCard'; // Adjust the path as necessary

// Sample data for products
const products = [
    {
        img: 'https://media.everlane.com/images/c_fill,w_384,ar_4:5,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/66e20e2c_0c2a/womens-way-high-drape-pant-short-seagrass',
        price: '₹11468',
    },
    {
        img: 'https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/85ef7234_0c3c/womens-washable-silk-oversized-shirt-chanterelle',
        price: '₹5999',
    },
    {
        img: 'https://static.pxlecdn.com/photos/662901090/medium/f238c8808e69ca0375ce.jpg',
        price: '₹7890',
    },
    {
        img: 'https://static.pxlecdn.com/photos/657146991/medium/ee14d54f9907ae45481f.jpg',
        price: '₹8876',
    },
    {
        img: 'https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/0125813f_28cd.jpg',
        price: '₹7852',
    },
    {
        img: 'https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/ea9279e5_53ae/mens-essential-organic-crew-uniform-golden-oak',
        price: '₹5430',
    },
    {
        img: 'https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/d1cb6541_f2f5.png',
        price: '₹6789',
    },
    {
        img: 'https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/8223fe7a_9801.png',
        price: '₹5999',
    },
    {
        img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/17377323a.webp',
        price: '₹2876',
    },
    {
        img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16321762a.webp',
        price: '₹3910',
    },
    {
        img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/14803144a.webp',
        price: '₹5430',
    },
    {
        img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/10692333a.webp',
        price: '₹4000',
    },
];

const ProductSection = () => {
    return (
        <div>
            <div className="banner">
                <video loop muted autoPlay>
                    <source src="./images/banner.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="container1">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
