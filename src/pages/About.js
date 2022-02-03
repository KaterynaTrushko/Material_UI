import React from "react";
import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
        About Page<br/>
        come back to: 
        <Link to="/">Catalogue</Link>
        </>
    )
}