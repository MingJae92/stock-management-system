import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Ensures full viewport height
      padding: '0 20px', // Adds optional padding
    }}
  >
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        Welcome to InventoryPro
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  </Box>
);

export default Hero;
