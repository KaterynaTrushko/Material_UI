import * as React from "react";
import { themeProduct, ThemeContextProduct } from "../themeProduct";
import { useContext } from "react";
import { Container, Grid, ThemeProvider } from "@mui/material";
import { theme } from "../services/theme";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//fotter
import CssBaseline from "@mui/material/CssBaseline";
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function MainPage() {
  const data = useContext(ThemeContextProduct);

  return (
    <div>
      <ThemeContextProduct.Provider value={themeProduct}>
        <ThemeProvider theme={theme}>
          <header>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Photo Texnika
                  </Typography>
                  <nav>
                    <Link variant="button" href="#" sx={{ my: 1, mx: 1.5 }}>
                      Features
                    </Link>
                    <Link
                      variant="button"
                      color="text.primary"
                      href="#"
                      sx={{ my: 1, mx: 1.5 }}
                    >
                      Enterprise
                    </Link>
                    <Link
                      variant="button"
                      color="text.primary"
                      href="#"
                      sx={{ my: 1, mx: 1.5 }}
                    >
                      Support
                    </Link>
                  </nav>
                  <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                  </Button>
                  <Button color="inherit">Login</Button>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </Stack>
                  <AddShoppingCartIcon style={{ marginLeft: "20px" }} />
                </Toolbar>
              </AppBar>
            </Box>
          </header>
          <main>
            <Container style={{marginTop:"20px"}}>
              <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
              {themeProduct.map((item)=>(
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                  <Card sx={{ width: 345 }, { height:600 }}
                  >
                    <CardMedia
                      component="img"
                      src={`/imegesGoods/${item.photo}`}
                      alt="photo"
                    />
                    <CardContent>
                      <Typography heightMax="100"
                      gutterBottom variant="h6" component="div">
                        {item.name}
                      </Typography>
                      <Typography height="100"
                     variant="h5" >
                        {item.price} UA
                      </Typography>
                     </CardContent>
                    <CardActions>
                      <Button size="small">Buy</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card> 
                </Grid>
              ))}
              </Grid>
            </Container>
          </main>
          <footer>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <CssBaseline />
              <Box
                component="footer"
                sx={{
                  py: 3,
                  px: 2,
                  mt: "auto",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[800],
                }}
              >
                <Container maxWidth="sm">
                  <Typography variant="body1">
                    My sticky footer can be found here.
                  </Typography>
                  <Copyright />
                </Container>
              </Box>
            </Box>
          </footer>
        </ThemeProvider>
      </ThemeContextProduct.Provider>
    </div>
  );
}




