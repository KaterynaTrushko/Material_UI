import * as React from "react";
import ReactDOM from "react-dom";
// import { ItemPage } from "./ItemPage";
import RecipeReviewCard from "../components/ItemPage";
import { ThemeContextProduct } from "../themeProduct";



export function ListPage(props) {

  const {data} = props;

  return (
    <div>
      {/* <ItemPage /> */}
      <RecipeReviewCard/>
    </div>
  )
}
