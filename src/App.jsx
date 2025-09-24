import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import HomePage from './components/Home/Home';
import ProductsPage from './components/Products/Products';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import ProductsCategory from './components/Category/Category';

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <BrowserRouter>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:productId' element={<ItemDetail />} />
            <Route path='/category/:categoryId' element={<ProductsCategory />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
