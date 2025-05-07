import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box sx={{ bgcolor: "#0d47a1", color: "#fff", py: 3, textAlign: "center" }}>
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} InventoryPro. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
