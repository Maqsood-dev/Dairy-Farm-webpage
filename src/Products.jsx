import React, { useState, useEffect } from 'react';
import './Products.css'; 
import productMilk from './assets/product1.jpg'
import productMeat from './assets/product2.jpg'
import productTofu from './assets/product3.jpg'
import productEgg from './assets/product4.jpg'

const Products = () => {
  const [products, setProducts] = useState([
    {
      name: 'Pure Milk',
      price: '$19.00 - $29.00',
      image: productMilk, 
    },
    {
      name: 'Fresh Meat',
      price: '$19.00 - $29.00',
      image: productMeat
    },
    {
      name: 'Tofu',
      price: '$19.00 - $29.00',
      image: productTofu,
    },
    {
      name: 'Eggs',
      price: '$1.00 - $12.00',
      image: productEgg,
    },
  ]);

  // Function to fetch random images 
  const fetchRandomImages = () => {
  };

  useEffect(() => {
    fetchRandomImages();
  }, []);

  return (
    <div className="products-container">
        <h3 id="serr">Products</h3>
      <h1>Our Dairy Products <br/>For Healthy Living</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;