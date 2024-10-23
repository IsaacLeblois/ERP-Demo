import './App.css';
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx'
import Inventory from './pages/Inventory.jsx';
import Products from './pages/Products.jsx';
import Suppliers from './pages/Suppliers.jsx';
import Tickets from './pages/Tickets.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Loader from './components/Loader.jsx';

const theme = createTheme({
  palette: {
    mode: 'dark', // Modo oscuro
    background: {
      default: '#121212', // Color de fondo principal
      paper: '#1e1e1e', // Color de fondo para los componentes como tarjetas
    },
    text: {
      primary: '#ffffff', // Color del texto
      secondary: '#b0bec5', // Color del texto secundario
    },
  },
});

const App = () => { // Asegúrate de que esto sea un componente funcional
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Inicia el fade out
      setTimeout(() => setLoading(false), 500); // Oculta el loader después de la transición
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading && <Loader fadeOut={fadeOut} />}
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Establece los estilos globales de MUI */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />           {/* Página principal */}
          <Route path="/inventory" element={<Inventory />} />           {/* Página principal */}
          <Route path="/products" element={<Products />} />           {/* Página principal */}
          <Route path="/Suppliers" element={<Suppliers />} />           {/* Página principal */}
          <Route path="/Tickets" element={<Tickets />} />           {/* Página principal */}
          <Route path="404" element={<NotFound />} />      {/* Página 404 para rutas no encontradas */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  );
};

export default App;
