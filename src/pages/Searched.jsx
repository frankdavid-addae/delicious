import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CuisineCard, Grid } from "../custom-styled";

export default function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearchedRecipes = async (name) => {
    const data = await fetch(`
          ${process.env.REACT_APP_API_BASEURL}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}
          `);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearchedRecipes(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <CuisineCard key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </CuisineCard>
        );
      })}
    </Grid>
  );
}
