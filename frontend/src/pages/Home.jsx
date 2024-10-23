import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Datos ficticios para la gráfica de ventas
const data = [
  { name: 'Enero', ventas: 4619 },
  { name: 'Febrero', ventas: 5418 },
  { name: 'Marzo', ventas: 1663 },
  { name: 'Abril', ventas: 2515 },
  { name: 'Mayo', ventas: 694 },
  { name: 'Junio', ventas: 2566 },
  { name: 'Julio', ventas: 2356 },
  { name: 'Agosto', ventas: 2566 },
  { name: 'Septiembre', ventas: 1293 },
  { name: 'Octubre', ventas: 7393 },
  { name: 'Noviembre', ventas: 1238 },
  { name: 'Diciembre', ventas: 4289 },
];

const Home = () => {
  return (
    <Box sx={{ padding: 10 }}>

      {/* Sección de Actividad Reciente */}
      <Typography variant="h5" gutterBottom>
        Actividad Reciente
      </Typography>
      <Grid container spacing={2}>
        {/* Cards cuadradas */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Nuevos Items</Typography>
              <Typography variant="h4">1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Ventas</Typography>
              <Typography variant="h4">13</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Reembolsos</Typography>
              <Typography variant="h4">15</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Nuevos Usuarios</Typography>
              <Typography variant="h4">4</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Gráfica de Ventas */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Gráfica de Ventas
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ventas" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Sección Dividida: Inventario y Finanzas */}
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {/* Inventario */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Inventario - Productos con Poco Stock
            </Typography>
            <Card>
              <CardContent>
                <Typography variant="body1">Producto 1: 5 unidades</Typography>
                <Typography variant="body1">Producto 2: 3 unidades</Typography>
                <Typography variant="body1">Producto 3: 8 unidades</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Finanzas */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Finanzas
            </Typography>
            <Card>
              <CardContent>
                <Typography variant="body1">Ingresos: $4,500</Typography>
                <Typography variant="body1">Gastos: $1,200</Typography>
                <Typography variant="body1">Ganancias: $3,300</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
