import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import './Navbar.css';
import Projecticon from '../Assets/ProjectIcon.png';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = savedCart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCartCount();

    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <nav className="navbar">
      <header>
        SANDY GREY
        <span><img src={Projecticon} alt='Projecticon' className='Projecticon_image' /></span>
      </header>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className='shop-link'><Link to="/shop">Shop</Link></li>
        <li className="cart-link">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
        <li><Link to="/LoginUser">LoginUser</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
