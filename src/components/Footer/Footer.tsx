import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#1a237e',
      color: 'white',
      padding: '20px 0',
      textAlign: 'center',
      width: '100%',
    }}
  >
    <Typography variant="body1">© 2025 InventoryPro</Typography>
    <Box>
      <Link href="#" sx={{ color: 'white', marginRight: '15px' }}>
        Privacy Policy
      </Link>
      <Link href="#" sx={{ color: 'white' }}>
        Terms of Service
      </Link>
    </Box>
  </Box>
);

export default Footer;
