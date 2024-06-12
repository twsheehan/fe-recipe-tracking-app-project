import React, { useState } from "react";

function RecipeCreate({ updateRecipes }) {
  const initialData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialData });

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipes(formData);
    setFormData({ ...initialData });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                placeholder="name"
                type="text"
                onChange={handleChange}
                required="true"
                value={formData.name}
              ></input>
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                placeholder="cuisine"
                type="text"
                onChange={handleChange}
                required="true"
                value={formData.cuisine}
              ></input>
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                placeholder="URL"
                type="text"
                onChange={handleChange}
                required="true"
                value={formData.photo}
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="ingredients"
                rows="2"
                onChange={handleChange}
                required="true"
                value={formData.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="preparation"
                rows="2"
                onChange={handleChange}
                required="true"
                value={formData.preparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
