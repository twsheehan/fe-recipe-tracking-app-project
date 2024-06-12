import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const updateRecipes = (newRecipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  };

  const deleteRecipe = (recipeIndex) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== recipeIndex)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate updateRecipes={updateRecipes} />
    </div>
  );
}

export default App;
