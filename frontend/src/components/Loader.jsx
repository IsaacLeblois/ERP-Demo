import React from 'react';
import './Loader.css'; // Asegúrate de importar el CSS
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';

const Loader = ({ fadeOut }) => {
  return (
    <div className={`loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="logo">
        <AdbIcon sx={{ fontSize: 100 }} /> {/* Aumenta el tamaño del icono */}
      </div>
      <Typography
        variant="h4" // Cambia a h4 para aumentar el tamaño del texto
        className='app-name'
        sx={{
          display: 'flex',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          marginTop: 2, // Espaciado superior
        }}
      >
        LOGO
      </Typography>
    </div>
  );
};

export default Loader;
