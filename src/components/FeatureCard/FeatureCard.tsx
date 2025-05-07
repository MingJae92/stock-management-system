import { Paper, Typography, Box } from "@mui/material";

const FeatureCard = () => (
  <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
    <Box sx={{ mb: 2 }}></Box>
    <Typography variant="h6">{}</Typography>
    <Typography variant="body2" color="text.secondary"></Typography>
  </Paper>
);

export default FeatureCard;
