import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../services/theme";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <Container>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    color="inherit"
                  >
                    <MenuIcon />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to="/about">About</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/delivery">Delivery</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/">Catalogue</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/catr">Cart</Link>
                    </MenuItem>
                  </Menu>
                  <Typography variant="h6">Shop UI</Typography>
                </Stack>
                <IconButton color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
