
import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Checkout from "../components/Ordering/Checkout";

export default function Cart() {
  return (
    <>
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            Delivery Page
            come back to:
            <Link to="/">Catalogue</Link>
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/>
      Cart Page come back to:
      <Link to="/">Catalogue</Link>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Checkout />
    </>
  );
}
