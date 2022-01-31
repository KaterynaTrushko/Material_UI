import React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcons from "@material-ui/icons/Menu";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";







export function Headet() {
  return (
      <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton adge="start" aria-label="menu">
            <MenuIcons />
          </IconButton>
          <Typography variant="h6">Photo stor</Typography>
        </Toolbar>
      </Container>
    </AppBar>


    <Paper style={{background="url(https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80)"}}>
      <Container fixed>
        <Grid container>
          <Grid item md={6}>
            <div>
              <Typography component='h1' paragraph>
                ohfriufh ihfifuhiu htuhtrhith rijfpotf pojfrpojf
              </Typography>
              <Button variant="contained" color="secondary"></Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    </>
  );
}
