import React from "react";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Footer from "../Footer/Footer";

function SignUp() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      {/* Navbar at the top */}
      <AppBar
        position="fixed"
        sx={{
          width: "100vw",
          left: 0,
          top: 0,
          backgroundColor: "#1a237e",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Navbar />
        </Toolbar>
      </AppBar>

      {/* Main content, pushed below AppBar */}
      <Box sx={{ flex: 1, mt: "64px" }}>
        Signup
      </Box>

      {/* Footer at the bottom */}
      <Footer />
    </Box>
  );
}

export default SignUp;
