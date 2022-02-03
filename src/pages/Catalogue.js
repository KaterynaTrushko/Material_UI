import * as React from "react";
import { useContext } from "react";
import { Container, Grid, ThemeProvider } from "@mui/material";
import { themeProduct, ThemeContextProduct } from "../themeProduct";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";

export default function Catalogue() {
  const data = useContext(ThemeContextProduct);

  return (
    <div>
      <ThemeContextProduct.Provider value={themeProduct}>
        <main>
          <Container style={{ marginTop: "100px", marginBottom: "40px",
           }}>
            <Grid
              container
              justifyContent="center"
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {themeProduct.map((item) => (
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                  <Card sx={({ width: 345 }, { height: 600 })}>
                    <CardMedia
                      component="img"
                      src={`/imegesGoods/${item.photo}`}
                      alt="photo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.name}
                      </Typography>
                      <Typography height="100" variant="h5">
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
      </ThemeContextProduct.Provider>
    </div>
  );
}
