import { Box, Typography, Button } from "@mui/material";

const CallToAction = () => (
  <Box sx={{ bgcolor: "#1a237e", color: "#fff", py: 6, textAlign: "center" }}>
    <Typography variant="h4" gutterBottom>
      Ready to Optimize Your Inventory?
    </Typography>
    <Button
      variant="contained"
      sx={{ mt: 2, backgroundColor: "#fbc02d", color: "#000" }}
    >
      Sign Up Now
    </Button>
  </Box>
);

export default CallToAction;
