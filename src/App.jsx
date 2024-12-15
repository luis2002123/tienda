import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false); //  ventana
  const [popupMessage, setPopupMessage] = useState(''); // Mensaje

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAddToCart = (productName) => {
    setPopupMessage(`${productName} ha sido agregado al carrito!`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Cerrar popup después de 2 segundos
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#121212' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        minHeight: '100vh',
        transition: 'all 0.5s ease', // modo oscuro
      }}
    >
      {/* nav*/}
      <nav
        style={{
          backgroundColor: isDarkMode ? '#333' : '#f1f1f1',
          padding: '10px',
          transition: 'background-color 0.3s ease',
        }}
      >
        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '30px' }}>
            <a href="/" style={{ color: isDarkMode ? '#fff' : '#000', textDecoration: 'none' }}>
              Home
            </a>
          </li>
          <li style={{ marginRight: '30px' }}>
            <a href="/products" style={{ color: isDarkMode ? '#fff' : '#000', textDecoration: 'none' }}>
              Products
            </a>
          </li>
          <li style={{ marginRight: '30px' }}>
            <a href="/contact" style={{ color: isDarkMode ? '#fff' : '#000', textDecoration: 'none' }}>
              Contact
            </a>
          </li>
          <li style={{ marginLeft: 'auto' }}>
            <button
              onClick={toggleDarkMode}
              style={{
                backgroundColor: isDarkMode ? '#555' : '#ddd',
                color: isDarkMode ? '#fff' : '#000',
                border: 'none',
                padding: '10px 20px',
                transition: 'background-color 0.3s ease',
              }}
			
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>

      {/* flotanta*/}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            zIndex: 1000,
            animation: 'fadeIn 0.5s ease',
          }}
        >
          {popupMessage}
        </div>
      )}

      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        handleAddToCart={handleAddToCart} // Pasamos la función para manejar el popup
      />
    </div>
  );
}

export default App;
