import { Container, Typography, Grid } from '@mui/material';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import FeatureCard from "../FeatureCard/FeatureCard"

const features = [
  {
    icon: Inventory2OutlinedIcon,
    title: 'Real-Time Tracking',
    description:
      'Monitor your inventory levels in real-time to prevent stockouts and overstocking.',
  },
  {
    icon: AssessmentOutlinedIcon,
    title: 'Detailed Analytics',
    description: 'Gain insights into inventory trends and make informed decisions.',
  },
  {
    icon: NotificationsActiveOutlinedIcon,
    title: 'Smart Alerts',
    description: 'Receive notifications for low stock levels and other critical updates.',
  },
];

const Features = () => (
  <Container sx={{ py: 8 }}>
    <Typography variant="h4" textAlign="center" gutterBottom>
      Features
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {/* {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <FeatureCard {...feature} />
        </Grid>
      ))} */}
    </Grid>
  </Container>
);

export default Features;
