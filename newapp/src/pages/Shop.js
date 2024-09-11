import React from 'react';
import axios from 'axios';
import Gn from '../Assets/Gin.png';
import CL from '../Assets/Coffee Liqueur.png';
import GL from '../Assets/Gondland.png';
import LC from '../Assets/Limon.png';
import NS from '../Assets/NS.png';
import SU from '../Assets/Su.png';
import WN from '../Assets/Winter.png';
import Bn from '../Assets/banner-shop.jpg'
import './Shop.css'
const Shop = () => {
  const handleAddToCart = async (product) => {
    try {
      const userId = localStorage.getItem('userId'); // Retrieve user ID from localStorage
      await axios.post('http://localhost:8080/api/cart', {
        userId,
        productId: product.id,
        title: product.title,
        description: product.description,
        img: product.img,
        price: product.price,
        quantity: 1, // Or any other quantity
      });
      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      // Optionally, set error state and display an error message
    }
  };
  

  // Example product data
  const products = [
    {
      id: 1,
      title: "Winter Gin",
      description: "Winter Gin is a unique spirit with rich and bold flavors, perfect for cold weather.",
      img: WN,
      price: "4000",
    },
    {
      id: 2,
      title: "Lanson",
      description: "Lanson is a premium gin with a refined taste and aromatic qualities.",
      img: Gn,
      price: "1000",
    },
    {
      id: 3,
      title: "Coffee Liqueur",
      description: "Coffee Liqueur is a sweet alcoholic  made from coffee and other ingredients.",
      img: CL,
      price: "3300",
    },
    {
      id: 4,
      title: "Gondwanland Gin",
      description: "Gondwanland Gin offers a bold and exotic flavor experience.",
      img: GL,
      price: "1800",
    },
    {
      id: 5,
      title: "LimonCello Gin",
      description: "LimonCello Gin combines zesty lemon flavors with a smooth gin base.",
      img: LC,
      price: "1200",
    },
    {
      id: 6,
      title: "Navy Strength Gin",
      description: "Navy Strength Gin is a strong and robust gin with intense flavor.",
      img: NS,
      price: "1400",
    },
    {
      id: 7,
      title: "Summer Gin",
      description: "Summer Gin is light and refreshing, perfect for sunny days.",
      img: SU,
      price: "1400",
    },
  ];

  return (<>
  <div><img src={Bn} alt='Bn' className='banner-imag'></img></div>
    <div className="shop-container">
      <h1>Product</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.title} className="product-img" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Shop;
