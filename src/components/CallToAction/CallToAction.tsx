import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CallToAction = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '0 20px',
      backgroundColor: '#f4f4f4', // Optional: Add background color to differentiate
    }}
  >
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Ready to Get Started?
      </Typography>
      <Button variant="contained" color="primary">
        Join Now
      </Button>
    </Box>
  </Box>
);

export default CallToAction;
