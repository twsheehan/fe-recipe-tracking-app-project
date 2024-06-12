import React from "react";

function RecipeView({ recipe, index, deleteRecipe }) {
  return (
    <tr key={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img alt={recipe.name} src={recipe.photo} />
      </td>
      <td className="content_td">{recipe.ingredients}</td>
      <td className="content_td">{recipe.preparation}</td>
      <td>
        <button
          name="delete"
          onClick={() => {
            deleteRecipe(index);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
