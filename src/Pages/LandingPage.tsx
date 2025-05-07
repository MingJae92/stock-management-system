import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import { Box } from '@mui/material';

const InventoryLandingPage = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Makes sure the footer is at the bottom
      minHeight: '100vh',
      minWidth:"100vw" // Ensures the page takes up the full height of the viewport
    }}
  >
    <Navbar />
    <Hero />
    <Features />
    <CallToAction />
    <Footer />
  </Box>
);

export default InventoryLandingPage;
