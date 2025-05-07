import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => (
  <Box sx={{ bgcolor: '#e3f2fd', py: 10, textAlign: 'center' }}>
    <Container>
      <Typography variant="h3" gutterBottom>
        Streamline Your Inventory Management
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Efficiently track, manage, and optimize your inventory with our intuitive platform.
      </Typography>
      <Button variant="contained" size="large" sx={{ mt: 3 }}>
        Get Started
      </Button>
    </Container>
  </Box>
);

export default Hero;
