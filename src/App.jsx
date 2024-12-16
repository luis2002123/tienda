import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ventana
  const [popupMessage, setPopupMessage] = useState(''); // mensaje

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
        transition: 'all 0.5s ease',
      }}
    >
      {/* Botón de modo oscuro */}
      <div style={{ padding: '10px', textAlign: 'right' }}>
        <button
          onClick={toggleDarkMode}
          style={{
            backgroundColor: isDarkMode ? '#555' : '#ddd',
            color: isDarkMode ? '#fff' : '#000',
            border: 'none',
            padding: '10px 20px',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer',
          }}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Popup flotante */}
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
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
