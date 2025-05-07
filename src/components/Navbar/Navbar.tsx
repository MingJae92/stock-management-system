import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        InventoryPro
      </Typography>
      <Button color="inherit">Login</Button>
      <Button color="inherit">Register</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
