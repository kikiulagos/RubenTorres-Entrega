import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import cartIcon from '../../../public/cart-icon.png';
import { useCartStore } from '../../Stores/CartStores';

export default function Header({ darkMode, setDarkMode }) {
  const { cart, removeFromCart } = useCartStore(); 
  const [isCartVisible, setIsCartVisible] = useState(false); 
  const cartRef = useRef(null);

  const toggleCartVisibility = () => setIsCartVisible(!isCartVisible);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="cabezal bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo"><Logo /></div>
          <div className="menunav"><Navbar /></div>
          <div className="search"><Search /></div>
          <div className="flex items-center gap-4">
            {/* Botón Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Icono del carrito */}
            <div className="cart-icon relative flex items-center cursor-pointer" onClick={toggleCartVisibility}>
              <img src={cartIcon} alt="Carrito de Compras" className="w-10 h-10 object-contain" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {isCartVisible && (
        <div 
          ref={cartRef} 
          className="fixed top-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg w-80 p-4 mt-20 rounded-lg text-black dark:text-white"
        >
          <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
        </div>
      )}
    </>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
