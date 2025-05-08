import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: "#1a237e" }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link to="/">InventoryPro</Link>
      </Typography>
      <Button color="inherit">
        <Link to="/login">Login</Link>
      </Button>
      <Button color="inherit">
        <Link to="/signup">Signup</Link>
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
