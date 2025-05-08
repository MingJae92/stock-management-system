import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"; // Assuming Footer is another component
import Login from "../components/Login/Login";

function LoginPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Makes sure the footer is at the bottom
        minHeight: '100vh',
        minWidth: "100vw", // Ensures the page takes up the full height of the viewport
      }}
    >
      <Navbar />
      {/* You can add your Login component here if needed */}
      <Login />
      <Footer />
    </Box>
  );
}

export default LoginPage;
