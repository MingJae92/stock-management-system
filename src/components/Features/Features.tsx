import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Features = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '0 20px',
    }}
  >
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5">Feature 1</Typography>
        <Typography variant="body1">Description of Feature 1</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5">Feature 2</Typography>
        <Typography variant="body1">Description of Feature 2</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5">Feature 3</Typography>
        <Typography variant="body1">Description of Feature 3</Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Features;
